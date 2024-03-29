import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cols = Math.floor(window.innerWidth / 60);
    const ypos = Array(cols)
      .fill(0)
      .map((_, i) => Math.floor(Math.random() * window.innerHeight));
    const matrix =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + // English letters and numbers
      "\u3040-\u309f\u30a0-\u30ff" + // Japanese Hiragana and Katakana
      "\u4e00-\u9faf\u3400-\u4dbf" + // Chinese Simplified and Traditional characters
      "\uac00-\ud7af" + // Korean Hangul characters
      "+-*/=<>[](){}|^_~`!@#$%&?.,:;"; // Math symbols

    const getRandomChar = () =>
      matrix[Math.floor(Math.random() * matrix.length)];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = "30pt monospace";
      ctx.textBaseline = "top";
      console.log(ypos);

      ypos.forEach((y, index) => {
        const text = getRandomChar();
        const x = index * 60;
        const isActive = y <= canvas.height;
        ctx.fillStyle = isActive ? "#0F0" : "#030";
        ctx.fillText(text, x, y);
        if (y > canvas.height + Math.random() * 10000) {
          ypos[index] = 0;
        } else {
          ypos[index] = y + 40;
        }
      });
    };

    const interval = setInterval(draw, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      width={window.innerWidth}
      height={window.innerHeight * 1.1}
    />
  );
};

export default MatrixBackground;
