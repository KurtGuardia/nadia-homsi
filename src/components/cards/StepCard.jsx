import { motion } from "framer-motion";

export const StepCard = ({ number, content, icon, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, delay: number * 0.1 }}
    whileHover={{
      y: -5,
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      transition: { duration: 0.2 },
    }}
    className={`
      bg-white p-2 md:p-6 rounded-xl shadow-md transition-shadow duration-300 cursor-default
      ${className}
    `}
  >
    <div className="flex items-start space-x-4">
      <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center">
        {icon ? icon : number + 1}
      </span>
      <p className="text-lg text-[var(--text-dark)]">{content}</p>
    </div>
  </motion.div>
);
