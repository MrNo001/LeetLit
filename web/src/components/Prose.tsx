import { Fragment } from "react";

const MARKUP = /(\*\*[^*]+\*\*|\*[^*]+\*)/;

/** Renders one line of text with *italic* and **bold** markup. */
export function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(MARKUP).map((part, i) => {
        if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/** Renders paragraphs that may contain inline markup. */
export function Prose({ paragraphs, className }: { paragraphs: string[]; className?: string }) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>
          <Inline text={paragraph} />
        </p>
      ))}
    </div>
  );
}

/** Removes inline markup, for places that need plain text such as page titles. */
export function plainText(text: string): string {
  return text.replace(/\*{1,2}([^*]+)\*{1,2}/g, "$1");
}
