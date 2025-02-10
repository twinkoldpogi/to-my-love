import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { FloatingElements } from "./floatinghearts";

const mediaItems = [
  { type: "video", src: "/photo/kaldag.mp4" },
 { type: "photo", src: "/photo/weup.jpeg" },
  { type: "video", src: "/photo/happy.mp4" },
  { type: "video", src: "/photo/mengmeng.mp4" },
  { type: "video", src: "/photo/kiddo.mp4" },
   { type: "video", src: "/photo/kaldagan.mp4" },
];

export const Celebration = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl mb-8 text-valentine-red font-serif">
        Yay! 💖
      </h1>
      <FloatingElements />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {mediaItems.map((media, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="aspect-square bg-valentine-pink rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            {media.type === "video" ? (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media.src}
                alt="Celebration media"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
