import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedProps {
  x?: number | string;
  y?: number | string;
  children: React.ReactNode;
}

const ToAnimate = ({ x, y, children }: AnimatedProps) => {
  const toTop: Variants = {
    hidden: { y: y, x: x, opacity: 0 },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        velocity: 10,
        damping: 30,
      },
    },
  };

  return <motion.div variants={toTop}>{children}</motion.div>;
};

export default ToAnimate;
