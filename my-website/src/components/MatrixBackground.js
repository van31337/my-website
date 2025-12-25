import { useEffect, useRef, useCallback } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const yposRef = useRef([]);

  const matrix =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" +
    "\u30A0\u30A1\u30A2\u30A3\u30A4\u30A5\u30A6\u30A7\u30A8\u30A9" +
    "\u30AA\u30AB\u30AC\u30AD\u30AE\u30AF\u30B0\u30B1\u30B2\u30B3" +
    "+-*/=<>[](){}|^~!@#$%&?.,:;";

  const getRandomChar = useCallback(
    () => matrix[Math.floor(Math.random() * matrix.length)],
    [matrix]
  );

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 20;
    const cols = Math.floor(canvas.width / fontSize);
    yposRef.current = Array(cols)
      .fill(0)
      .map(() => Math.random() * canvas.height);

    return { fontSize, cols };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let config = initCanvas();

    const draw = () => {
      if (!config) return;
      const { fontSize } = config;

      // Fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}pt monospace`;
      ctx.textBaseline = "top";

      yposRef.current.forEach((y, index) => {
        const text = getRandomChar();
        const x = index * fontSize;

        // Gradient from bright to dim green
        const brightness = Math.random();
        if (brightness > 0.98) {
          ctx.fillStyle = "#fff"; // Occasional white flash
        } else if (brightness > 0.9) {
          ctx.fillStyle = "#0f0"; // Bright green
        } else {
          ctx.fillStyle = `rgba(0, ${150 + Math.random() * 105}, 0, ${0.5 + Math.random() * 0.5})`;
        }

        ctx.fillText(text, x, y);

        // Reset position randomly
        if (y > canvas.height + Math.random() * 10000) {
          yposRef.current[index] = 0;
        } else {
          yposRef.current[index] = y + fontSize;
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    const intervalId = setInterval(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      draw();
    }, 50);

    // Handle resize
    const handleResize = () => {
      config = initCanvas();
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [initCanvas, getRandomChar]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "#000",
      }}
    />
  );
};

export default MatrixBackground;
