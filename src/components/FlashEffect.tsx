import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const FlashEffect = () => {
  const controls = useAnimation();

  useEffect(() => {
    const flashLight = async () => {
      await controls.start({
        opacity: [0, 1, 0],
        transition: { duration: 0.5 }
      });
      
      // Random delay between flashes
      setTimeout(flashLight, Math.random() * 5000 + 2000);
    };

    flashLight();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="fixed inset-0 bg-white pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
};