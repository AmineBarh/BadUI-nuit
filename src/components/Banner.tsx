import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  "Excellence is a lie!",
  "We are the best!",
  "Resistance is futile!",
  "Join the revolution!",
  "Your choices are meaningless!"
];

export const Banner = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="w-full bg-red-600 text-white py-20 relative overflow-hidden"
      animate={{ 
        backgroundColor: ['#dc2626', '#b91c1c', '#991b1b'],
      }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
            }}
          >
            ★
          </motion.div>
        ))}
      </div>
      <motion.h1
        className="text-6xl font-bold text-center mb-8"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
      >
        {phrases[currentPhrase]}
      </motion.h1>
      <motion.p
        className="text-2xl text-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        Welcome to the ultimate portfolio of pure greatness!
      </motion.p>
    </motion.div>
  );
};