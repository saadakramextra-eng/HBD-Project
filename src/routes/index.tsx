import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleField } from "@/components/ParticleField";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Special Place For My Princess ❤️" },
      { name: "description", content: "An intimate, romantic birthday surprise — enter our secret date." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { isAuthed, login } = useAuth();
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState("");
  const [exploding, setExploding] = useState(false);

  useEffect(() => {
    if (isAuthed) navigate({ to: "/welcome", replace: true });
  }, [isAuthed, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(pw)) {
      setExploding(true);
      setTimeout(() => navigate({ to: "/welcome" }), 2400);
    } else {
      setError("That is not our special date ❤️");
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-romance">
      <ParticleField count={28} kind="petal" />
      <ParticleField count={20} kind="sparkle" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 glass rounded-[2rem] p-8 sm:p-12 max-w-md w-full text-center glow-rose ${shake ? "animate-shake" : ""}`}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          ❤️
        </motion.div>
        <h1 className="font-script text-4xl sm:text-5xl text-rose glow-text mb-2">
          A Special Place
        </h1>
        <p className="font-display text-xl sm:text-2xl text-blush/90 mb-8 italic">
          For My Princess ❤️
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="password"
              inputMode="numeric"
              autoFocus
              value={pw}
              onChange={(e) => { setPw(e.target.value); setError(""); }}
              placeholder="Enter Our Secret Date"
              className="w-full px-5 py-4 rounded-full bg-input/80 border border-primary/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/40 text-center font-display text-lg tracking-[0.3em] placeholder:text-muted-foreground/60 placeholder:tracking-normal placeholder:font-display placeholder:italic"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-rose-grad font-display tracking-[0.25em] uppercase text-sm hover:scale-[1.02] transition-transform shadow-[var(--shadow-elegant)] animate-pulse-glow"
          >
            Enter My Heart
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-5 font-script text-2xl text-destructive"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <p className="mt-8 text-xs text-muted-foreground/70 font-display tracking-[0.3em] uppercase">
          A gift made with love
        </p>
      </motion.div>

      <AnimatePresence>
        {exploding && <ExplosionOverlay />}
      </AnimatePresence>
    </main>
  );
}

function ExplosionOverlay() {
  const items = Array.from({ length: 60 }, (_, i) => i);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 pointer-events-none"
    >
      <motion.div
        initial={{ background: "radial-gradient(circle at center, transparent 0%, transparent 100%)" }}
        animate={{ background: "radial-gradient(circle at center, oklch(0.55 0.25 22 / 0.7) 0%, transparent 80%)" }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      />
      {items.map((i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const distance = 400 + Math.random() * 500;
        const symbols = ["🌹", "❤️", "🌸", "✨", "💖"];
        const symbol = symbols[i % symbols.length];
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: 0,
              scale: 1.6,
              rotate: 360,
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 text-3xl"
            style={{ textShadow: "0 0 20px oklch(0.6 0.22 16)" }}
          >
            {symbol}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
