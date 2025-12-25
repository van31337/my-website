import { motion } from "framer-motion";
import "../styles/GlassCard.scss";

const GlassCard = ({
  children,
  className = "",
  delay = 0,
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      <div className="glass-card-glow" />
      <div className="glass-card-content">{children}</div>
      <div className="glass-card-border" />
    </motion.div>
  );
};

export default GlassCard;
