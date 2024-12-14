import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        textShadow: [
          '2px 0 #ff0000, -2px 0 #00ff00',
          '-2px 0 #ff0000, 2px 0 #00ff00',
          '2px 0 #ff0000, -2px 0 #00ff00',
        ],
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {text}
    </motion.div>
  );
};