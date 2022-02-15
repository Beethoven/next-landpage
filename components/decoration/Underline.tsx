import { motion } from "framer-motion";

const Underline = ({ bg }) => {
  const toLeft = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        duration: 0.1,
      },
    },
  };
  const toLeftChildren = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        velocity: 100,
      },
    },
  };

  return (
    <motion.div variants={toLeft} className="mt-1 -mb-1 flex space-x-1">
      <motion.div
        variants={toLeftChildren}
        className={`h-2 w-24 rounded-full ${bg}`}
      ></motion.div>
      <motion.div
        variants={toLeftChildren}
        className={`h-2 w-12 rounded-full ${bg} opacity-80`}
      ></motion.div>
      <motion.div
        variants={toLeftChildren}
        className={`h-2 w-6 rounded-full ${bg} opacity-60`}
      ></motion.div>
      <motion.div
        variants={toLeftChildren}
        className={`h-2 w-3 rounded-full ${bg} opacity-40`}
      ></motion.div>
      <motion.div
        variants={toLeftChildren}
        className={`h-2 w-2 rounded-full ${bg} opacity-20`}
      ></motion.div>
    </motion.div>
  );
};

export default Underline;
