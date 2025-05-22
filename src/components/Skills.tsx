'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: "Voice Acting 🎙️",
    items: ["Character Voices", "Narration", "Commercial", "Animation"]
  },
  {
    category: "Development 💻",
    items: ["Next.js", "React", "MySQL", "Tailwind CSS", "JavaScript/TypeScript"]
  },
  {
    category: "Creative 🎨",
    items: ["UI/UX Design", "Digital Art", "Content Creation"]
  },
  {
    category: "Gaming 🎮",
    items: ["Esports", "Competitive Gaming", "Game Analysis", "Streaming"]
  }
];

export default function Skills() {
  return (
    <section className="py-16 px-4 bg-black/20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
      >
        Skills & Expertise 🚀
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-2 h-2 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
