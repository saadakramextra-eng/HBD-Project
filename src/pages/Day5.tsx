import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleField } from "@/components/ParticleField";
import { PageHero } from "@/components/DayNav";
import { PhotoPlaceholder, VideoPlaceholder } from "@/components/Placeholders";
import { Typewriter } from "@/components/Typewriter";

const LETTER_KEY = "princess-letter";
const DEFAULT_LETTER = `My Princess,

If I could fold every feeling I have for you into one piece of paper, this would still not be big enough. You make ordinary days feel like festivals. You make difficult days feel survivable. You make me, somehow, a little more myself.

Thank you for your laugh, for your patience, for the small kindnesses you give without ever counting them. Thank you for letting me love you, and for loving me back in that quiet, certain way of yours.

Happy birthday, my love. The whole year ahead is just an excuse to keep finding new ways to make you smile.`;

export function Day5() {
  const [fireworks, setFireworks] = useState(true);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTagline(true), 1200);
    const t2 = setTimeout(() => setFireworks(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <>
      <ParticleField count={30} kind="petal" />
      <ParticleField count={24} kind="heart" />
      <ParticleField count={20} kind="sparkle" />

      <AnimatePresence>{fireworks && <Fireworks />}</AnimatePresence>

      <section className="relative text-center py-24 px-4">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl mb-6"
        >
          🎂✨
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="font-script text-5xl sm:text-7xl text-rose glow-text"
        >
          Happy Birthday My Princess ❤️
        </motion.h1>
        <div className="mt-6 min-h-[3rem] font-display text-lg sm:text-2xl italic text-blush/95">
          {showTagline && (
            <Typewriter text="Thank you for being the most beautiful chapter of my life." speed={38} />
          )}
        </div>
      </section>

      {/* Birthday Cake */}
      <Cake />

      {/* Memory & Video Galleries */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <h2 className="font-script text-4xl text-rose text-center glow-text mb-10">Memory Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PhotoPlaceholder aspect="portrait" caption="That morning" />
          <PhotoPlaceholder aspect="portrait" caption="Our quiet evening" />
          <PhotoPlaceholder aspect="portrait" caption="Just because" />
          <PhotoPlaceholder aspect="square" caption="Your laugh" />
          <PhotoPlaceholder aspect="square" caption="Us, again" />
          <PhotoPlaceholder aspect="square" caption="A little forever" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="font-script text-4xl text-rose text-center glow-text mb-10">Video Gallery</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <VideoPlaceholder caption="Our birthday hello" />
          <VideoPlaceholder caption="A little message for you" />
        </div>
      </section>

      {/* Special Birthday Message */}
      <section className="max-w-3xl mx-auto px-4 mt-24 text-center">
        <h2 className="font-script text-4xl text-rose glow-text mb-6">Special Birthday Message</h2>
        <p className="font-display italic text-xl text-blush/95 leading-relaxed">
          On this day, the world got better because you arrived in it. Every candle you blow out is a wish I am
          already trying to make come true. You are the softest, brightest thing that ever happened to me, and
          today I just want to celebrate the simple, enormous miracle of you being here.
        </p>
      </section>

      {/* Future Dreams */}
      <section className="max-w-5xl mx-auto px-4 mt-24">
        <h2 className="font-script text-4xl text-rose text-center glow-text mb-10">Future Dreams Together</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "✈️", title: "Cities we'll wander", text: "Maps unfolded across the bed, planning trips we'll actually take." },
            { icon: "🏡", title: "Mornings we'll share", text: "Slow coffees, sleepy kisses, sunlight pouring through windows that are ours." },
            { icon: "🌌", title: "Years we'll collect", text: "Birthdays, ordinary Tuesdays, anniversaries — all stacked gently on top of each other." },
          ].map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-3xl p-6 text-center hover:border-rose hover:shadow-[var(--glow-rose)] transition-all"
            >
              <div className="text-4xl mb-3">{d.icon}</div>
              <h3 className="font-display text-xl mb-2">{d.title}</h3>
              <p className="text-blush/85 italic text-sm leading-relaxed">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Letter Section */}
      <LetterSection />

      {/* Forever Yours */}
      <section className="text-center py-24 px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="font-script text-6xl sm:text-8xl text-rose glow-text"
        >
          Forever Yours ❤️
        </motion.h2>
      </section>
    </>
  );
}

/* ---------- Cake ---------- */

function Cake() {
  const [lit, setLit] = useState(false);
  return (
    <section className="max-w-md mx-auto px-4 mt-10 text-center">
      <p className="font-display text-sm uppercase tracking-[0.4em] text-rose mb-3">Make a wish</p>
      <p className="font-script text-3xl text-blush/95 mb-6">Tap the cake ❤️</p>
      <button
        onClick={() => setLit(true)}
        className="relative mx-auto block w-64 h-64 sm:w-72 sm:h-72 group focus:outline-none"
        aria-label="Light the candles"
      >
        {/* candles */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative">
              <div className="w-1.5 h-10 bg-rose-grad rounded-sm" />
              <AnimatePresence>
                {lit && (
                  <motion.div
                    initial={{ scale: 0, y: 8, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15, type: "spring", damping: 12 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 rounded-full"
                    style={{
                      background: "radial-gradient(circle, #fff6a8 0%, #ff9e3b 50%, #c00 100%)",
                      boxShadow: "0 0 20px #ffb347, 0 0 40px #ff5722, 0 0 60px #c00",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* cake tiers */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          <div className="mx-auto w-40 h-12 rounded-t-2xl bg-gradient-to-b from-rose to-primary shadow-[var(--shadow-elegant)]" />
          <div className="mx-auto w-56 h-16 -mt-1 rounded-t-2xl bg-gradient-to-b from-rose to-primary shadow-[var(--shadow-elegant)]" />
          <div className="mx-auto w-64 h-20 -mt-1 rounded-t-2xl bg-gradient-to-b from-rose to-primary shadow-[var(--shadow-elegant)]" />
          <div className="mx-auto w-72 h-3 -mt-1 rounded-md bg-wine" />
        </div>
        {/* glow */}
        <div className={`absolute inset-0 rounded-full transition-opacity duration-700 ${lit ? "opacity-100" : "opacity-0"}`}
          style={{ background: "radial-gradient(circle, oklch(0.7 0.25 60 / 0.4), transparent 60%)" }}
        />
      </button>

      <AnimatePresence>{lit && <Fireworks />}</AnimatePresence>
      <AnimatePresence>
        {lit && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-script text-3xl text-rose glow-text"
          >
            Make your wish, my love ❤️
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Fireworks ---------- */

function Fireworks() {
  const bursts = Array.from({ length: 8 }, (_, i) => i);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 pointer-events-none"
    >
      {bursts.map((b) => {
        const cx = 15 + Math.random() * 70;
        const cy = 15 + Math.random() * 60;
        const delay = (b * 0.4) % 3;
        const particles = Array.from({ length: 18 }, (_, j) => j);
        const hue = [16, 18, 22, 25][b % 4];
        return (
          <div key={b} className="absolute" style={{ left: `${cx}%`, top: `${cy}%` }}>
            {particles.map((j) => {
              const angle = (j / particles.length) * Math.PI * 2;
              const r = 100 + Math.random() * 80;
              return (
                <motion.span
                  key={j}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.3 }}
                  animate={{ x: Math.cos(angle) * r, y: Math.sin(angle) * r, opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1.6, delay, repeat: Infinity, repeatDelay: 1.6 }}
                  className="absolute block w-1.5 h-1.5 rounded-full"
                  style={{
                    background: `oklch(0.7 0.25 ${hue})`,
                    boxShadow: `0 0 8px oklch(0.7 0.25 ${hue}), 0 0 16px oklch(0.55 0.22 ${hue})`,
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}

/* ---------- Letter ---------- */

function LetterSection() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(DEFAULT_LETTER);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LETTER_KEY);
      if (saved) setText(saved);
    }
  }, []);

  const save = (v: string) => {
    setText(v);
    if (typeof window !== "undefined") localStorage.setItem(LETTER_KEY, v);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 mt-28 relative">
      <h2 className="font-script text-5xl text-rose text-center glow-text mb-2">Open This Letter ❤️</h2>
      <p className="font-display italic text-center text-blush/90 mb-10">
        My Princess, I wrote something from my heart for you ❤️
      </p>

      {!open && <Envelope onOpen={() => setOpen(true)} />}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <ParticleField count={14} kind="sparkle" />
            <div
              className="relative rounded-2xl p-8 sm:p-12 shadow-[var(--shadow-elegant)]"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.97 0.02 60) 0%, oklch(0.92 0.05 30) 100%)",
                color: "oklch(0.25 0.1 20)",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0 28px, oklch(0.4 0.15 20 / 0.08) 28px 29px)",
              }}
            >
              {editing ? (
                <textarea
                  value={text}
                  onChange={(e) => save(e.target.value)}
                  className="w-full min-h-[24rem] bg-transparent font-hand text-2xl sm:text-3xl leading-relaxed outline-none resize-none text-wine"
                  style={{ color: "oklch(0.3 0.15 20)" }}
                />
              ) : (
                <p className="font-hand text-2xl sm:text-3xl leading-relaxed whitespace-pre-wrap text-wine" style={{ color: "oklch(0.3 0.15 20)" }}>
                  {text}
                </p>
              )}
              <div className="mt-8 text-right">
                <p className="font-script text-4xl" style={{ color: "oklch(0.42 0.21 25)" }}>
                  Forever Yours ❤️
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setEditing((v) => !v)}
                className="px-5 py-2.5 rounded-full glass border-rose text-sm font-display tracking-[0.25em] uppercase hover:bg-primary/30 transition"
              >
                {editing ? "Done Writing" : "Edit Letter"}
              </button>
              <button
                onClick={() => { setOpen(false); setTimeout(() => setOpen(true), 400); }}
                className="px-5 py-2.5 rounded-full bg-rose-grad text-sm font-display tracking-[0.25em] uppercase hover:scale-105 transition"
              >
                Read Again ❤️
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-full border border-muted text-sm font-display tracking-[0.25em] uppercase hover:border-rose transition"
              >
                Close Letter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Envelope({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 420 }}>
      <ParticleField count={10} kind="heart" />
      <motion.button
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpen}
        className="relative block w-full aspect-[4/3] rounded-2xl overflow-hidden glow-rose animate-pulse-glow focus:outline-none"
        style={{ background: "linear-gradient(135deg, oklch(0.42 0.21 25), oklch(0.12 0.08 18))" }}
        aria-label="Open the letter"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 49.5%, oklch(0 0 0 / 0.4) 50%, transparent 50.5%), linear-gradient(45deg, transparent 49.5%, oklch(0 0 0 / 0.4) 50%, transparent 50.5%)",
          }}
        />
        {/* flap */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background: "linear-gradient(180deg, oklch(0.32 0.18 22), oklch(0.18 0.1 18))",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            borderBottom: "1px solid oklch(0.6 0.22 16 / 0.6)",
          }}
        />
        {/* wax seal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-rose-grad flex items-center justify-center text-2xl shadow-[var(--glow-rose)]">
          ❤
        </div>
      </motion.button>
      <p className="text-center mt-6">
        <span className="inline-block px-6 py-3 rounded-full bg-rose-grad font-display tracking-[0.3em] uppercase text-sm cursor-pointer" onClick={onOpen}>
          Open My Letter
        </span>
      </p>
    </div>
  );
}
