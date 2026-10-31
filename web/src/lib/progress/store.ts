/**
 * Where a learner's progress is kept.
 *
 * Guests use the browser-backed store below. With accounts, add a store that
 * calls the API (for example GET/PUT /api/progress) and pick it in
 * ProgressProvider based on the session. On first sign-in, merge the guest's
 * local progress into the account so nothing is lost.
 */
export interface ProgressStore {
  /** Ids of the lessons the learner has completed. */
  list(): Promise<string[]>;
  setCompleted(lessonId: string, completed: boolean): Promise<void>;
}

const STORAGE_KEY = "leetlit:progress:v1";

function read(): string[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function write(ids: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Storage can be unavailable (private browsing, blocked site data); progress then lasts for this visit only.
  }
}

/** Guest progress, kept in this browser only. */
export const localProgressStore: ProgressStore = {
  async list() {
    return read();
  },
  async setCompleted(lessonId, completed) {
    const ids = new Set(read());
    if (completed) ids.add(lessonId);
    else ids.delete(lessonId);
    write([...ids]);
  },
};
