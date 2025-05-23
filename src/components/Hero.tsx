import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-16 px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
        className="mb-8"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Isaiah Wright 🎭
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          Voice Actor 🎙️ | Tech Enthusiast 💻 | Creative Artist 🎨 | Esports Enthusiast 🎮
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        <a
          href="https://www.linkedin.com/in/isaiah-wright-384b2b26a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
        >
          LinkedIn 👋
        </a>
        <a
          href="https://github.com/Zay2006"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full transition-colors"
        >
          GitHub 💻
        </a>
        <a
          href="tel:215-720-1444"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors"
        >
          Call Me 📱
        </a>
        <a
          href="mailto:iwright4706@outlook.com"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
        >
          Email Me ✉️
        </a>
      </motion.div>
    </motion.section>
  );
}
