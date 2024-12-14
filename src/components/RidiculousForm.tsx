import { useState } from 'react';
import { motion } from 'framer-motion';
import { MovingButton } from './MovingButton';
import { GlitchText } from './GlitchText';
import useSound from 'use-sound';

const formFields = [
  { name: 'petBloodType', label: "Pet's Blood Type" },
  { name: 'moonCapital', label: "What's the capital of the moon?" },
  { name: 'lifeMeaning', label: "Have you ever thought about the meaning of life?" },
  { name: 'favoriteParadox', label: "Your favorite paradox?" },
  { name: 'timeTravel', label: "When was the last time you time traveled?" },
];

export const RidiculousForm = () => {
  const [formData, setFormData] = useState({});
  const [playBeep] = useSound('/beep.mp3', { volume: 0.5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your request has been ignored. Try as more as you can");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label className="block text-lg font-medium">
            <GlitchText text={field.label} />
          </label>
          <motion.input
            type="text"
            className="w-full p-3 bg-red-900 text-white rounded"
            onChange={(e) => {
              playBeep();
              setFormData({ ...formData, [field.name]: e.target.value });
            }}
            whileFocus={{
              scale: [1, 1.02, 1],
              transition: { duration: 0.2, repeat: Infinity },
            }}
          />
        </div>
      ))}
      <div className="relative h-20">
        <MovingButton text="Submit (if you can)" />
      </div>
    </form>
  );
};