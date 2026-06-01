// Birthday journey is May/June 2026 — but we want it usable now.
// Logic: each day unlocks on its calendar date (June 1..5) of the CURRENT year,
// OR immediately if today is already past June 5 of the current year.
// For demo/preview before June: also unlock everything in dev when ?preview=all is present.

export const DAYS = [
  { day: 1, month: 5, label: "1 June", emoji: "❤️", path: "/day/1", title: "My First Love" },
  { day: 2, month: 5, label: "2 June", emoji: "❤️", path: "/day/2", title: "The Day We Met" },
  { day: 3, month: 5, label: "3 June", emoji: "❤️", path: "/day/3", title: "Our Movie Nights" },
  { day: 4, month: 5, label: "4 June", emoji: "❤️", path: "/day/4", title: "The Most Beautiful Girl" },
  { day: 5, month: 5, label: "5 June", emoji: "🎂", path: "/day/5", title: "Happy Birthday My Love" },
] as const;

export type DayInfo = (typeof DAYS)[number];

export function isUnlocked(day: number): boolean {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "all") return true;
  }
  const now = new Date();
  const year = now.getFullYear();
  // After June 5 of current year, everything stays unlocked
  const seasonEnd = new Date(year, 5, 6); // June 6
  if (now >= seasonEnd) return true;
  const unlockDate = new Date(year, 5, day); // June `day`
  return now >= unlockDate;
}

export function currentUnlockedDay(): number {
  for (let d = 5; d >= 1; d--) if (isUnlocked(d)) return d;
  return 0;
}
