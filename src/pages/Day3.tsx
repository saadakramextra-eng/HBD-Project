import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { PageHero } from "@/components/DayNav";
import { PhotoPlaceholder } from "@/components/Placeholders";

const movies = [
  {
    title: "Demon Slayer: Infinity Castle",
    blurb: "Cinematic chaos and quiet tears — your hand finding mine in the dark.",
    moment: "That one fight where you actually gasped out loud.",
    rating: 5,
  },
  {
    title: "Tere Ishq Mein",
    blurb: "Soft, slow, painfully beautiful. The kind of love story that feels familiar.",
    moment: "The scene we both replayed three times without saying a word.",
    rating: 5,
  },
  {
    title: "Saiyaara",
    blurb: "Music that lingered in the room hours after the credits rolled.",
    moment: "When you sang the chorus into my shoulder.",
    rating: 4,
  },
  {
    title: "If Wishes Could Kill",
    blurb: "Twists and stares and 'wait — go back five seconds'.",
    moment: "The pause where we both whispered the same theory.",
    rating: 4,
  },
  {
    title: "Karma",
    blurb: "Heavy, gorgeous, and somehow exactly what we were in the mood for.",
    moment: "Holding you a little tighter during the ending.",
    rating: 5,
  },
];

export function Day3() {
  return (
    <>
      <ParticleField count={14} kind="sparkle" />
      <ParticleField count={10} kind="heart" />

      <div className="relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle at 20% 10%, oklch(0.55 0.25 25 / 0.35), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.42 0.21 25 / 0.4), transparent 55%)",
          }}
        />
        <PageHero title="Our Movie Nights" subtitle="Curled up, lights low, just us" />
      </div>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden hover:border-rose hover:shadow-[var(--glow-rose)] transition-all duration-500 group"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-crimson/40 to-black/80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🎬</div>
                    <p className="text-xs uppercase tracking-[0.3em] text-rose">Poster</p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.42 0.21 25 / 0.7), transparent 70%)",
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2">{m.title}</h3>
                <p className="text-sm text-blush/85 italic mb-4 leading-relaxed">{m.blurb}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-rose mb-1">Favorite moment</p>
                <p className="font-hand text-lg text-blush/90 mb-4">{m.moment}</p>
                <div className="flex items-center gap-1 text-rose">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k} className={k < m.rating ? "" : "opacity-25"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-script text-3xl text-rose text-center mb-8 glow-text">Behind The Screen</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <PhotoPlaceholder aspect="square" caption="Snacks for two" />
            <PhotoPlaceholder aspect="square" caption="The blanket fort" />
            <PhotoPlaceholder aspect="square" caption="You, half-asleep" />
          </div>
        </div>
      </section>
    </>
  );
}
