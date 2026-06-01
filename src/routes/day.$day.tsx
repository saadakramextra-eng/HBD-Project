import { createFileRoute, useParams, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { isUnlocked, DAYS } from "@/lib/days";
import { DayNav } from "@/components/DayNav";
import { ParticleField } from "@/components/ParticleField";
import { LockedModal } from "@/components/LockedModal";
import { Day1 } from "@/pages/Day1";
import { Day2 } from "@/pages/Day2";
import { Day3 } from "@/pages/Day3";
import { Day4 } from "@/pages/Day4";
import { Day5 } from "@/pages/Day5";
import { useState } from "react";

export const Route = createFileRoute("/day/$day")({
  head: ({ params }) => {
    const day = parseInt(params.day, 10);
    const info = DAYS.find((d) => d.day === day);
    const title = info ? `${info.title} ❤️` : "Our Story";
    return {
      meta: [
        { title },
        { name: "description", content: `${info?.title ?? "A day in our story"} — a romantic page for my princess.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `${info?.title ?? "A day in our story"} — a romantic page for my princess.` },
      ],
    };
  },
  component: DayPage,
});

const DAY_MAP: Record<number, React.FC> = { 1: Day1, 2: Day2, 3: Day3, 4: Day4, 5: Day5 };

function DayPage() {
  const { day } = useParams({ from: "/day/$day" });
  const dayNum = parseInt(day, 10);
  const { isAuthed } = useAuth();
  const navigate = useNavigate();
  const [showLocked, setShowLocked] = useState(false);

  useEffect(() => {
    if (!isAuthed) navigate({ to: "/", replace: true });
  }, [isAuthed, navigate]);

  useEffect(() => {
    if (!isUnlocked(dayNum)) setShowLocked(true);
  }, [dayNum]);

  if (!isAuthed) return null;
  const Comp = DAY_MAP[dayNum];
  if (!Comp) return null;

  if (!isUnlocked(dayNum)) {
    return (
      <main className="min-h-screen bg-romance flex flex-col">
        <DayNav />
        <ParticleField count={12} kind="petal" />
        <div className="flex-1" />
        <LockedModal
          open={showLocked}
          onClose={() => navigate({ to: "/journey" })}
          onReturn={() => navigate({ to: "/journey" })}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-romance">
      <DayNav />
      <Comp />
    </main>
  );
}
