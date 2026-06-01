import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { PageHero } from "@/components/DayNav";
import { PhotoPlaceholder } from "@/components/Placeholders";

const sections = [
  {
    title: "Her Smile",
    text:
      "There is a specific smile of yours — the one that arrives slowly, almost shy, and then bursts wide open. That smile is the entire reason I believe in good days.",
  },
  {
    title: "Her Eyes",
    text:
      "Your eyes are the softest places I know. When they meet mine, the noise in my head goes quiet — like the world remembered to be gentle for a moment.",
  },
  {
    title: "Her Voice",
    text:
      "Your voice is the song I never tire of. Even your sleepy 'hello' has more music in it than anything I have ever listened to on purpose.",
  },
  {
    title: "Her Personality",
    text:
      "You are warmth and wit, fire and tenderness, all at once. Everything I admire most about people somehow lives inside you, and you carry it like it weighs nothing.",
  },
  {
    title: "How She Makes Me Feel",
    text:
      "Around you I am not performing. I am just home. With you I am the boy who found his safe place, the child who came back to the porch light. I am allowed to be soft, to be honest, to be whole.",
  },
];

export function Day4() {
  return (
    <>
      <ParticleField count={16} kind="heart" />
      <ParticleField count={20} kind="sparkle" />

      <PageHero title="The Most Beautiful Girl" subtitle="My quiet kind of wonder" />

      <section className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 sm:p-8 hover:border-rose hover:shadow-[var(--glow-rose)] transition-all duration-500"
            >
              <div className="text-3xl mb-3">🦋</div>
              <h3 className="font-display text-3xl mb-3 text-rose">{s.title}</h3>
              <p className="font-display italic text-lg text-blush/95 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="lg:sticky lg:top-24 space-y-6">
          <PhotoPlaceholder aspect="portrait" caption="Just you, exactly like this" />
          <div className="grid grid-cols-2 gap-4">
            <PhotoPlaceholder aspect="square" caption="That look" />
            <PhotoPlaceholder aspect="square" caption="Golden hour" />
          </div>
          <PhotoPlaceholder aspect="video" caption="Caught smiling" />
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}
