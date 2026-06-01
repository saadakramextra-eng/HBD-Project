import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { PageHero } from "@/components/DayNav";
import { PhotoPlaceholder, VideoPlaceholder } from "@/components/Placeholders";

const moments = [
  {
    title: "Our First Conversation",
    text:
      "I didn't know it then, but the words we exchanged that first time were already the beginning of everything. You spoke and the world quietly rearranged itself around your voice.",
  },
  {
    title: "Our First Laugh",
    text:
      "Somewhere between two sentences you laughed — and I remember thinking, 'I want to be the reason for that sound, every single day, for as long as life will let me.'",
  },
  {
    title: "Our First Memory",
    text:
      "We didn't take a picture, but I have it somewhere safer than any phone — kept exactly where I keep everything that matters most. In my chest, just beneath my heart.",
  },
  {
    title: "The Beginning Of Us",
    text:
      "There was no announcement, no dramatic line. Just a quiet certainty, soft as a held breath: that whatever this was, I never wanted it to end.",
  },
];

export function Day2() {
  return (
    <>
      <ParticleField count={20} kind="petal" />
      <ParticleField count={12} kind="sparkle" />
      <PageHero title="The Day We Met" subtitle="Fate, dressed as a coincidence" />

      <section className="max-w-3xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-lg sm:text-xl text-blush/95 italic text-center leading-relaxed"
        >
          Some meetings are written long before they happen. Ours felt like one of those. We were
          strangers for a heartbeat — and then, somehow, never strangers again.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <ol className="relative space-y-10">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-rose/70 to-transparent" aria-hidden />
          {moments.map((m, i) => (
            <motion.li
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`relative pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-[55%] sm:text-right" : "sm:pl-[55%]"}`}
            >
              <span className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 top-7 size-4 rounded-full bg-rose-grad shadow-[var(--glow-rose)] ring-4 ring-black" />
              <div className="glass rounded-3xl p-6 sm:p-8">
                <p className="text-xs tracking-[0.4em] uppercase text-rose mb-2">Chapter {i + 1}</p>
                <h3 className="font-display text-2xl mb-3">{m.title}</h3>
                <p className="font-display italic text-blush/90 leading-relaxed">{m.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="font-script text-4xl text-rose text-center mb-10 glow-text">Frozen Moments</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <PhotoPlaceholder aspect="video" caption="The first time" />
          <PhotoPlaceholder aspect="video" caption="The second I knew" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16 pb-24">
        <VideoPlaceholder caption="A little glimpse of us" />
      </section>
    </>
  );
}
