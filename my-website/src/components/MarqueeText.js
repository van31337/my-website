import { motion } from "framer-motion";
import "../styles/MarqueeText.scss";

const MarqueeText = ({ items, direction = "left", speed = 25 }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -50 + "%"] : [-50 + "%", 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-track"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
            <span className="separator">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
