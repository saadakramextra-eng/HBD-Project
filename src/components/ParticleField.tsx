import { useEffect, useState } from "react";

type Kind = "heart" | "petal" | "sparkle";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  xEnd: number;
  kind: Kind;
  hue: number;
}

const SYMBOLS: Record<Kind, string[]> = {
  heart: ["❤", "♥", "❣"],
  petal: ["🌹", "🌸", "💮"],
  sparkle: ["✦", "✧", "✨", "•"],
};

interface Props {
  count?: number;
  kind?: Kind | "mix";
  className?: string;
}

export function ParticleField({ count = 25, kind = "mix", className = "" }: Props) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: count }).map((_, i) => {
      const k: Kind =
        kind === "mix"
          ? (["heart", "petal", "sparkle"] as Kind[])[i % 3]
          : kind;
      return {
        id: i,
        x: Math.random() * 100,
        size: 12 + Math.random() * 28,
        duration: 10 + Math.random() * 18,
        delay: Math.random() * 12,
        xEnd: (Math.random() - 0.5) * 200,
        kind: k,
        hue: 350 + Math.random() * 20,
      };
    });
    setParticles(items);
  }, [count, kind]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${className}`}
      aria-hidden
    >
      {particles.map((p) => {
        const symbols = SYMBOLS[p.kind];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const isPetal = p.kind === "petal";
        const isSparkle = p.kind === "sparkle";
        return (
          <span
            key={p.id}
            style={{
              left: `${p.x}%`,
              fontSize: `${p.size}px`,
              animation: isPetal
                ? `petal-fall ${p.duration}s linear ${p.delay}s infinite`
                : isSparkle
                ? `sparkle ${2 + Math.random() * 3}s ease-in-out ${p.delay}s infinite`
                : `float-up ${p.duration}s linear ${p.delay}s infinite`,
              ["--x-end" as string]: `${p.xEnd}px`,
              color: `oklch(0.6 0.22 ${p.hue % 360 < 20 ? p.hue % 360 : 16})`,
              textShadow: "0 0 12px oklch(0.55 0.22 18 / 0.8)",
              position: "absolute",
              top: isSparkle ? `${Math.random() * 100}%` : undefined,
              opacity: isSparkle ? undefined : 0,
            }}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  );
}
