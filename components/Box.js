import { motion } from "framer-motion";

const Box = ({ children }) => {
  const boxTop = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        type: "spring",
        damping: 30,
        velocity: 25,
      },
    },
  };

  const viewport = {
    margin: "-10%",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={boxTop}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default Box;
