import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleField } from "@/components/ParticleField";
import { useAuth } from "@/lib/auth";
import { DAYS, isUnlocked } from "@/lib/days";
import { LockedModal } from "@/components/LockedModal";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Our Journey ❤️" },
      { name: "description", content: "Five days of love — one for each step of our story." },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  const { isAuthed } = useAuth();
  const navigate = useNavigate();
  const [showLocked, setShowLocked] = useState(false);

  useEffect(() => {
    if (!isAuthed) navigate({ to: "/", replace: true });
  }, [isAuthed, navigate]);

  return (
    <main className="min-h-screen relative overflow-hidden bg-romance">
      <ParticleField count={20} kind="petal" />
      <ParticleField count={14} kind="sparkle" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.5em] text-rose uppercase mb-3">Our Story</p>
          <h1 className="font-display text-5xl sm:text-7xl glow-text">
            Five Days of Love
          </h1>
          <p className="font-script text-3xl text-rose mt-4">A countdown to your day ❤️</p>
        </motion.div>

        <ol className="relative grid gap-6 sm:gap-8">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose/60 to-transparent" aria-hidden />
          {DAYS.map((d, i) => {
            const unlocked = isUnlocked(d.day);
            const side = i % 2 === 0 ? "sm:pr-[55%] sm:text-right" : "sm:pl-[55%]";
            return (
              <motion.li
                key={d.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative pl-16 sm:pl-0 ${side}`}
              >
                <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 size-5 rounded-full bg-rose-grad shadow-[var(--glow-rose)] ring-4 ring-black" />
                <div className={`glass rounded-3xl p-6 sm:p-8 ${unlocked ? "hover:border-rose hover:shadow-[var(--glow-rose)] transition-all" : "opacity-70"}`}>
                  <p className="text-xs tracking-[0.4em] uppercase text-rose mb-2">Day {d.day} {d.emoji}</p>
                  <h2 className="font-display text-3xl mb-3">{d.title}</h2>
                  <p className="text-sm text-blush/80 mb-5 font-display italic">{d.label}, 2026</p>
                  {unlocked ? (
                    <Link
                      to={d.path}
                      className="inline-block px-6 py-2.5 rounded-full bg-rose-grad text-sm font-display tracking-[0.25em] uppercase hover:scale-105 transition-transform"
                    >
                      Open Page
                    </Link>
                  ) : (
                    <button
                      onClick={() => setShowLocked(true)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-muted text-sm font-display tracking-[0.25em] uppercase text-muted-foreground"
                    >
                      🔒 Locked
                    </button>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>

      <LockedModal
        open={showLocked}
        onClose={() => setShowLocked(false)}
        onReturn={() => setShowLocked(false)}
      />
    </main>
  );
}
