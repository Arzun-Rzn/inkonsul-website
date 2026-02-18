import { motion } from "framer-motion";
import "../styles/Loader.css";

export default function Loader({ onFinish }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      onAnimationComplete={onFinish}
    >
      <motion.div
        className="logo-text loader-logo"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className="i">I</span>
        <span className="t">T</span>
      </motion.div>
    </motion.div>
  );
}
