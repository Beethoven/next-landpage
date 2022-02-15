import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Box = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 30,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      positionTransition
      ref={ref}
      className="bg-green-500 p-12"
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >
      {children}
    </motion.div>
  );
};

export default Box;
