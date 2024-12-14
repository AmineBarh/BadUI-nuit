import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Your opinion doesn't matter, but we appreciate your presence!",
  "You're still here? How persistent!",
  "This website is watching you...",
  "Click anywhere to pledge your allegiance!",
  "Warning: Excessive exposure may cause enlightenment"
];

export const PopupMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setMessageIndex((prev) => (prev + 1) % messages.length);
      setTimeout(() => setIsVisible(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-sm"
          style={{ zIndex: 1000 }}
        >
          <p className="text-lg font-bold">{messages[messageIndex]}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};