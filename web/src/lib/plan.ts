import type { Access } from "@/content/types";

export type Plan = "free" | "pro";

/**
 * Prototype only: a cookie that lets anyone preview the site as a Pro
 * subscriber. Once accounts exist, the plan comes from the subscription
 * record on the server instead (see viewer.ts) and this cookie goes away.
 */
export const PLAN_PREVIEW_COOKIE = "leetlit-plan-preview";

export function canAccess(plan: Plan, access: Access): boolean {
  return access === "free" || plan === "pro";
}
