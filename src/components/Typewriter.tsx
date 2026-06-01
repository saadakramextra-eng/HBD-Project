import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}

export function Typewriter({ text, speed = 45, startDelay = 0, className, onDone }: Props) {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");
    let i = 0;
    let cancelled = false;
    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i++;
        setOut(text.slice(0, i));
        if (i < text.length) setTimeout(tick, speed);
        else onDone?.();
      };
      tick();
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={className}>
      {out}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-rose ml-1 animate-pulse" />
    </span>
  );
}
