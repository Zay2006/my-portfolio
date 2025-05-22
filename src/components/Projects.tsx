import { motion } from 'framer-motion';

const projects = [
  {
    title: "Social Dashboard 📊",
    description: "A social media analytics dashboard with comprehensive insights and data visualization",
    link: "https://social-dashboard-delta.vercel.app",
    tech: ["Next.js", "MySQL", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "TimedTimer 3.0 ⏰",
    description: "A focus timer with integrated YouTube functionality for enhanced productivity",
    link: "https://timed-timer3-0.vercel.app",
    tech: ["React", "YouTube API", "CSS"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "YouTube Viewer 2.0 🎥",
    description: "A simple and colorful YouTube viewer with a minimalist design",
    link: "https://youtube-viewer2-0.vercel.app",
    tech: ["React", "YouTube API", "CSS"],
    color: "from-red-500 to-orange-500"
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
      >
        My Projects 🚀
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-t-xl mb-4`} />
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              View Project 🔗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
