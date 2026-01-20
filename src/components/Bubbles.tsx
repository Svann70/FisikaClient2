import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 8,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-bubble/30 border border-bubble/50"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        >
          <div
            className="absolute top-1 left-1 w-1/3 h-1/3 rounded-full bg-white/60"
          />
        </div>
      ))}
    </div>
  );
};

export default Bubbles;
