'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open email client with pre-filled content
    window.location.href = `mailto:iwright4706@outlook.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
      >
        Let&apos;s Connect! 📬
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto mb-8 flex flex-wrap justify-center gap-6"
      >
        <a
          href="tel:215-720-1444"
          className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-colors"
        >
          <span className="text-2xl">📱</span>
          <span className="text-lg">(215) 720-1444</span>
        </a>
        <a
          href="mailto:iwright4706@outlook.com"
          className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-colors"
        >
          <span className="text-2xl">✉️</span>
          <span className="text-lg">iwright4706@outlook.com</span>
        </a>
        <a
          href="https://github.com/Zay2006"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-colors"
        >
          <span className="text-2xl">💻</span>
          <span className="text-lg">GitHub</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl p-8 relative"
      >
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 left-4 right-4 bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center backdrop-blur-lg"
            >
              <p className="text-white font-medium">
                Thanks for reaching out! I&apos;ll reply within 48 hours ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 bg-black/20 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors text-white"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-black/20 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 bg-black/20 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors text-white"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            Send Message 🚀
          </button>
        </form>
      </motion.div>
    </section>
  );
}
