import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Megaphone, Skull, Brain, Mail } from 'lucide-react';

const crypticMessages = [
  "You shouldn't have clicked that",
  "Error: Reality not found",
  "404: Logic not found",
  "Are you sure about that?",
  "This button leads nowhere"
];

export const Navigation = () => {
  const [message, setMessage] = useState("");

  const showCrypticMessage = () => {
    const randomMessage = crypticMessages[Math.floor(Math.random() * crypticMessages.length)];
    setMessage(randomMessage);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Megaphone className="mr-2" />
            PROPAGANDA
          </Link>
        </motion.div>
        
        <div className="flex space-x-8">
          {[
            { to: "/", icon: <Skull />, text: "Home" },
            { to: "/portfolio", icon: <Brain />, text: "Portfolio" },
            { to: "/contact", icon: <Mail />, text: "Contact" },
          ].map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ 
                scale: 1.2,
                rotate: Math.random() * 20 - 10,
              }}
            >
              <Link
                to={item.to}
                className="flex items-center"
                onClick={(e) => {
                  if (Math.random() > 0.5) {
                    e.preventDefault();
                    showCrypticMessage();
                  }
                }}
              >
                {item.icon}
                <span className="ml-1">{item.text}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-4 rounded"
        >
          {message}
        </motion.div>
      )}
    </nav>
  );
};