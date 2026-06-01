import { motion } from "framer-motion";

interface Props {
  src?: string;
  caption?: string;
  aspect?: "square" | "video" | "portrait";
  label?: string;
}

const ratio = { square: "aspect-square", video: "aspect-video", portrait: "aspect-[3/4]" };

export function PhotoPlaceholder({ src, caption, aspect = "square", label = "Photo" }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        className={`${ratio[aspect]} relative overflow-hidden rounded-2xl glass border border-primary/30 group-hover:border-rose transition-all duration-500 group-hover:shadow-[var(--glow-rose)]`}
      >
        {src ? (
          <img src={src} alt={caption ?? "memory"} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-wine/40 to-black/60">
            <div className="text-4xl mb-3 opacity-70">🌹</div>
            <div className="font-script text-2xl text-rose mb-1">{label}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Placeholder</div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-hand text-lg text-blush/90">{caption}</figcaption>
      )}
    </motion.figure>
  );
}

export function VideoPlaceholder({ src, caption }: { src?: string; caption?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
      className="group"
    >
      <div className="aspect-video relative overflow-hidden rounded-2xl glass border border-primary/30 group-hover:border-rose transition-all duration-500 group-hover:shadow-[var(--glow-rose)]">
        {src ? (
          <video src={src} controls className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-crimson/40 to-black/70">
            <div className="text-5xl mb-3 opacity-80 group-hover:scale-110 transition-transform">▶</div>
            <div className="font-script text-2xl text-rose mb-1">Video</div>
            <div className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Placeholder</div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-hand text-lg text-blush/90">{caption}</figcaption>
      )}
    </motion.figure>
  );
}
