import { RidiculousForm } from '../components/RidiculousForm';
import { PopupMessage } from '../components/PopupMessage';
import { GlitchText } from '../components/GlitchText';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="max-w-4xl mx-auto p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <GlitchText 
          text="CONTACT THE SUPREME LEADER" 
          className="text-5xl font-bold text-center mb-12"
        />
        
        <motion.div
          className="bg-red-900 p-8 rounded-lg"
          animate={{
            boxShadow: [
              '0 0 10px #ff0000',
              '0 0 20px #ff0000',
              '0 0 10px #ff0000',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <RidiculousForm />
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xl">
            Warning: Submitting this form may result in temporary or permanent reality distortion.
          </p>
        </motion.div>
      </motion.div>
      <PopupMessage />
    </div>
  );
};