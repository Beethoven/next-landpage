import { motion } from "framer-motion";

const StaggerChildren = ({ children }) => {
  const toTop = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        damping: 30,
        velocity: 25,
      },
    },
  };

  return <motion.div variants={toTop}>{children}</motion.div>;
};

export default StaggerChildren;
