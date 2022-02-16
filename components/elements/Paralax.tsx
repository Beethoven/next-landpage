import React, { useRef, useState } from "react";
import {
  motion,
  Variants,
  useTransform,
  useViewportScroll,
} from "framer-motion";

interface ParalaxProps {
  children: React.ReactNode;
}

const Paralax = ({ children }: ParalaxProps) => {
  const { scrollYProgress, scrollY } = useViewportScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const toTop: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        velocity: 10,
        damping: 30,
      },
    },
  };

  return (
    <motion.div style={{ y: scrollY * 0.5 }} variants={toTop}>
      {children}
    </motion.div>
  );
};

export default Paralax;
