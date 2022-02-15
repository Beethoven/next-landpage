import { motion } from "framer-motion";

const Inertia = ({ children }) => {
  const boxTop = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  return <motion.div variants={boxTop}>{children}</motion.div>;
};

export default Inertia;
