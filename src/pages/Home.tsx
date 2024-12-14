import { useEffect } from "react";
import { Banner } from "../components/Banner";
import { PopupMessage } from "../components/PopupMessage";
import { motion } from "framer-motion";

export const Home = () => {
  useEffect(() => {
    const audio = new Audio("../annoying.mp3");
    const playAudio = () => {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    };
    const handleClick = () => {
      playAudio();
      document.removeEventListener("click", handleClick);
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <Banner />

      <motion.div
        className="max-w-4xl mx-auto p-8 text-white font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          animate={{
            color: ["#ff0000", "#ff6b6b", "#ff0000"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          EMBRACE THE CHAOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Revolutionary Design Principles",
            "Unmatched Excellence",
            "Supreme Leadership",
            "Ultimate Power",
          ].map((title, index) => (
            <motion.div
              key={title}
              className="bg-yellow-300 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-blue-950 hover:text-gray-300 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <PopupMessage />
    </div>
  );
};
