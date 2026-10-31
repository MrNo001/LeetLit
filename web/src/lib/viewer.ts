import { cookies } from "next/headers";
import { PLAN_PREVIEW_COOKIE, type Plan } from "./plan";

/** The person looking at a page. */
export interface Viewer {
  /** Null until accounts exist: every visitor is a guest. */
  userId: string | null;
  plan: Plan;
}

/**
 * Resolves the current viewer on the server. Pages that gate content call
 * this before rendering, so locked content is never sent to the browser.
 *
 * This is the one place to change when accounts arrive: read the session
 * (for example with Auth.js or Clerk) and look up the user's subscription
 * (for example a subscriptions table kept in sync by Stripe webhooks).
 * The prototype's plan comes from a preview cookie; a real plan must never
 * be taken from anything the browser sends.
 */
export async function getViewer(): Promise<Viewer> {
  const jar = await cookies();
  const plan: Plan = jar.get(PLAN_PREVIEW_COOKIE)?.value === "pro" ? "pro" : "free";
  return { userId: null, plan };
}
