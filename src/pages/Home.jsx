import "../styles/Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (

    <section className="hero" id="home">

      {/* Left Content */}
      <motion.div
        className="hero-text"

        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <h1>
          We Build
          <span className="gradient-text"> Digital Products </span>
          That Grow Your Business
        </h1>

        <p>
          Inkonsul Technologies delivers creative, scalable, and
          future-ready software solutions.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            View Work
          </button>

        </div>

      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="hero-img"

        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <img src="/hero.png" alt="Tech" />

      </motion.div>

    </section>
  );
}
