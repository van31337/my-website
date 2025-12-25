import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/CustomCursor.scss";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-card") ||
        target.closest(".contact-item") ||
        target.closest(".pet-image") ||
        target.closest(".nav-link") ||
        target.closest(".pdf-action-btn") ||
        target.closest(".mobile-menu-btn") ||
        target.closest(".resume-btn")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-card") ||
        target.closest(".contact-item") ||
        target.closest(".pet-image") ||
        target.closest(".nav-link") ||
        target.closest(".pdf-action-btn") ||
        target.closest(".mobile-menu-btn") ||
        target.closest(".resume-btn")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className={`cursor ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "tween",
        duration: 0.1,
        ease: "linear",
      }}
    >
      <div className="cursor-crosshair">
        <span className="h-line"></span>
        <span className="v-line"></span>
        <span className="center-dot"></span>
      </div>
    </motion.div>
  );
};

export default CustomCursor;
