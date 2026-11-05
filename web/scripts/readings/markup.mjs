// A small tokenizer for the XML and HTML sources. They are machine-generated
// and regular enough that a full parser isn't needed.

const NAMED = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  mdash: "—", ndash: "–", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”", hellip: "…",
  sigmaf: "ς",
};
// Greek letters by their HTML names: alpha → α, Alpha → Α (final sigma is skipped in the alphabet).
"alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega"
  .split(" ")
  .forEach((name, i) => {
    const offset = i + (i >= 17 ? 1 : 0);
    NAMED[name] = String.fromCodePoint(0x3b1 + offset);
    NAMED[name[0].toUpperCase() + name.slice(1)] = String.fromCodePoint(0x391 + offset);
  });

export function decode(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
    if (entity[0] !== "#") return NAMED[entity] ?? NAMED[entity.toLowerCase()] ?? match;
    const hex = entity[1] === "x" || entity[1] === "X";
    return String.fromCodePoint(parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10));
  });
}

function attributes(source) {
  const attrs = {};
  for (const m of source.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) attrs[m[1].toLowerCase()] = decode(m[2] ?? m[3]);
  return attrs;
}

const VOID = new Set(["br", "hr", "img", "link", "meta", "input", "wbr", "col", "source"]);

/**
 * Yields { kind: "open" | "close" | "text", name, attrs, empty, text } in document order.
 * Comments, doctypes and processing instructions are skipped.
 */
export function* tokenize(source) {
  const re = /<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<[?!][^>]*>|<(\/?)([A-Za-z][\w:.-]*)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>|([^<]+)/g;
  for (const m of source.matchAll(re)) {
    if (m[6] !== undefined) yield { kind: "text", text: decode(m[6]) };
    else if (m[1] !== undefined) yield { kind: "text", text: m[1] };
    else if (m[3]) {
      const name = m[3].toLowerCase();
      if (m[2]) yield { kind: "close", name };
      else yield { kind: "open", name, attrs: attributes(m[4]), empty: !!m[5] || VOID.has(name) };
    }
  }
}

/**
 * Walks tokens with an element stack, so handlers can ask about ancestors.
 * `skip(name, attrs)` returning true drops the element and everything inside it.
 */
export function* walk(source, { skip = () => false } = {}) {
  const stack = [];
  let skipping = 0;
  for (const token of tokenize(source)) {
    if (token.kind === "open") {
      if (skipping) {
        if (!token.empty) skipping++;
        continue;
      }
      if (skip(token.name, token.attrs, stack)) {
        if (!token.empty) skipping = 1;
        continue;
      }
      yield { ...token, stack };
      if (!token.empty) stack.push(token);
    } else if (token.kind === "close") {
      if (skipping) {
        skipping--;
        continue;
      }
      // Tolerate stray or unbalanced closing tags in the HTML sources.
      const at = stack.map((el) => el.name).lastIndexOf(token.name);
      if (at === -1) continue;
      while (stack.length > at) {
        const el = stack.pop();
        yield { kind: "close", name: el.name, attrs: el.attrs, stack };
      }
    } else if (!skipping) {
      yield { ...token, stack };
    }
  }
}
