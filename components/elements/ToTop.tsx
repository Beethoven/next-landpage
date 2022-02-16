import React from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
}

const ToTop = ({ children }: ContainerProps) => {
  const toTop = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
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

export default ToTop;
