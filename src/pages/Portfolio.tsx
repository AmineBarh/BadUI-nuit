import { ProjectCard } from '../components/ProjectCard';
import { PopupMessage } from '../components/PopupMessage';
import { GlitchText } from '../components/GlitchText';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Created the Internet",
    description: "In 2005, I single-handedly invented the entire internet. No big deal.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
  },
  {
    title: "Nobel Prize in Web Design",
    description: "Won the prestigious (and totally real) Nobel Prize in Web Design, 2010.",
    imageUrl: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?auto=format&fit=crop&w=800",
  },
  {
    title: "Mars Website",
    description: "First developer to deploy a website on Mars. Aliens love it.",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800",
  },
];

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        className="max-w-6xl mx-auto p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <GlitchText 
          text="WITNESS MY ACHIEVEMENTS" 
          className="text-5xl font-bold text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          animate={{
            scale: [1, 1.1, 1],
            color: ['#ff0000', '#ff6b6b', '#ff0000'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h2 className="text-3xl font-bold mb-4">Timeline of Greatness</h2>
          <div className="space-y-4">
            {[
              "2005: Created the Internet",
              "2010: Won the Nobel Prize in Web Design",
              "2015: Invented New Colors",
              "2020: Achieved Digital Immortality",
            ].map((achievement) => (
              <motion.div
                key={achievement}
                className="bg-red-900 p-4 rounded"
                whileHover={{
                  scale: 1.05,
                  rotateX: 360,
                }}
                transition={{ duration: 0.5 }}
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <PopupMessage />
    </div>
  );
};