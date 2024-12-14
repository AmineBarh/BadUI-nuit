import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface MovingButtonProps {
  text: string;
  onClick?: () => void;
}

export const MovingButton = ({ text, onClick }: MovingButtonProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const moveButton = async () => {
      await controls.start({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        transition: { duration: 0.3 },
      });
    };

    const handleMouseMove = () => {
      if (Math.random() > 0.5) {
        moveButton();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <motion.button
      animate={controls}
      className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      {text}
    </motion.button>
  );
};