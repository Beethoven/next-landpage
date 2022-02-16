import React, { useRef, useState } from "react";
import {
  motion,
  Variants,
  useTransform,
  useViewportScroll,
} from "framer-motion";

interface ParalaxProps {
  children: React.ReactNode;
  speed: number;
}

const Paralax = ({ speed, children }: ParalaxProps) => {
  const { scrollYProgress, scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [0, 600], [0, 100 * speed]);

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
    <motion.div style={{ y }} variants={toTop}>
      {children}
    </motion.div>
  );
};

export default Paralax;
