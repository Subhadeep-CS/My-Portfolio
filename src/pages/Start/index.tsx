import { motion } from "framer-motion";

export default function Start() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center max-w-lg">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WELCOME TO MY WORLD!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 mt-4 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm Subhadeep, React.js & Next.js Developer passionate about building
          fast, scalable, and engaging web applications.
        </motion.p>

        {/* Button with hover effect */}
        <motion.a
          href="/home"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 transition-all text-white text-lg font-semibold px-6 py-3 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          EXPLORE MY WORLD <span className="animate-ping">→</span>
        </motion.a>
      </div>
    </div>
  );
}
