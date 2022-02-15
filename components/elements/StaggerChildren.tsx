import React from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
}

const StaggerChildren = ({ children }: ContainerProps) => {
  const show = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        damping: 30,
        velocity: 25,
      },
    },
  };

  return <motion.div variants={show}>{children}</motion.div>;
};

export default StaggerChildren;
