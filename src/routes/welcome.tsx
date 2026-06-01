import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleField } from "@/components/ParticleField";
import { Typewriter } from "@/components/Typewriter";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/welcome")({
  head: () => ({
    meta: [
      { title: "Welcome My Love ❤️" },
      { name: "description", content: "A journey through our memories begins here." },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  const { isAuthed } = useAuth();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!isAuthed) navigate({ to: "/", replace: true });
  }, [isAuthed, navigate]);

  return (
    <main className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-romance">
      <ParticleField count={30} kind="heart" />
      <ParticleField count={18} kind="sparkle" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-6xl sm:text-8xl text-rose glow-text mb-10"
        >
          Welcome My Love ❤️
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="font-display text-lg sm:text-2xl text-blush/90 leading-relaxed italic min-h-[10rem]"
        >
          <Typewriter
            text={`Every day with you feels like a beautiful dream. This little website is a journey through our memories, our moments, our love story, and your birthday.`}
            speed={38}
            startDelay={1400}
            onDone={() => setShowButton(true)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <Link
            to="/journey"
            className="inline-block px-10 py-4 rounded-full bg-rose-grad font-display tracking-[0.3em] uppercase text-sm hover:scale-105 transition-transform shadow-[var(--shadow-elegant)] animate-pulse-glow"
          >
            Begin The Journey
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
