import { motion } from "framer-motion";
import { Link, useNavigate } from "@tanstack/react-router";
import { DAYS, isUnlocked, currentUnlockedDay } from "@/lib/days";
import { useState } from "react";
import { LockedModal } from "./LockedModal";

export function DayNav() {
  const navigate = useNavigate();
  const [showLocked, setShowLocked] = useState(false);
  const today = currentUnlockedDay();

  return (
    <>
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
          <Link to="/journey" className="font-script text-2xl text-rose glow-text">
            Our Story ❤️
          </Link>
          <ul className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {DAYS.map((d) => {
              const unlocked = isUnlocked(d.day);
              return (
                <li key={d.day}>
                  {unlocked ? (
                    <Link
                      to={d.path}
                      className="px-3 py-1.5 rounded-full text-sm font-display tracking-wide border border-primary/40 hover:border-rose hover:bg-primary/30 transition-all hover:scale-105 inline-block"
                      activeProps={{ className: "bg-rose-grad shadow-[var(--glow-soft)] border-rose" }}
                    >
                      {d.label} {d.emoji}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setShowLocked(true)}
                      className="px-3 py-1.5 rounded-full text-sm font-display tracking-wide border border-muted/40 text-muted-foreground hover:border-muted/60 transition-all inline-flex items-center gap-1.5 opacity-70"
                    >
                      🔒 {d.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <LockedModal
        open={showLocked}
        onClose={() => setShowLocked(false)}
        onReturn={() => {
          setShowLocked(false);
          if (today > 0) navigate({ to: `/day/${today}` });
          else navigate({ to: "/journey" });
        }}
      />
    </>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="text-center py-16 sm:py-24 px-4 relative">
      <motion.h1
        initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.02em" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl sm:text-7xl font-light glow-text text-balance"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-script text-rose text-3xl sm:text-4xl mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
