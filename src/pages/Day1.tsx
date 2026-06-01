import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import { PageHero } from "@/components/DayNav";
import { PhotoPlaceholder, VideoPlaceholder } from "@/components/Placeholders";

export function Day1() {
  return (
    <>
      <ParticleField count={18} kind="petal" />
      <ParticleField count={14} kind="heart" />
      <PageHero title="My First Love" subtitle="The one who taught my heart" />

      <section className="max-w-3xl mx-auto px-4 space-y-10 text-balance">
        <Paragraph delay={0.1}>
          Before you, love was only a word — a soft idea I had read about, heard sung, watched on
          screens. Then you walked in, and every line I had only imagined became real. You are my
          first love, and the first person who ever made me understand what that word truly means.
        </Paragraph>
        <Paragraph delay={0.2}>
          With you, every feeling arrived for the first time. The way my heart trips over itself
          when you smile. The way the world goes quiet when you look at me. The way I find myself
          counting hours until I can hear your voice again. These are all firsts, and they are all
          yours.
        </Paragraph>
        <Paragraph delay={0.3}>
          You are pure to me. Pure in the way mornings are pure, in the way a candle is pure when
          it lights an entire room. Loving you didn't change me — it revealed me. It showed me the
          softest, truest version of myself, the one I only become when I am near you.
        </Paragraph>
        <Paragraph delay={0.4}>
          So today, on the first day of your week, I want you to know: you are my first love. And
          first loves, my princess, are forever.
        </Paragraph>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="font-script text-4xl text-rose text-center mb-10 glow-text">Our Moments</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <PhotoPlaceholder aspect="portrait" caption="The way you look at me" />
          <PhotoPlaceholder aspect="portrait" caption="My favorite smile in the world" />
          <PhotoPlaceholder aspect="portrait" caption="Us, exactly as we are" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16 pb-24">
        <VideoPlaceholder caption="A little video of us" />
      </section>
    </>
  );
}

function Paragraph({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="font-display text-lg sm:text-xl text-blush/95 leading-relaxed italic text-center"
    >
      {children}
    </motion.p>
  );
}
