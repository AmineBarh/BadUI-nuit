import { motion } from 'framer-motion';
import { useState } from 'react';
import { GlitchText } from './GlitchText';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-red-900 p-6 rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
        animate={{
          filter: isHovered ? [
            'hue-rotate(0deg)',
            'hue-rotate(360deg)',
            'hue-rotate(0deg)',
          ] : 'none',
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <GlitchText text={title} className="text-2xl font-bold mb-4" />
      <p className="text-gray-300">{description}</p>
      <motion.button
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.location.href = Math.random() > 0.5 ? '/404' : '#'}
      >
        View Project
      </motion.button>
    </motion.div>
  );
};