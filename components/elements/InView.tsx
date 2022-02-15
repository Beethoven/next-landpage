import { motion } from "framer-motion";

const InView = ({ children }) => {
  const viewport = {
    margin: "-12%",
  };

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewport}>
      {children}
    </motion.div>
  );
};

export default InView;
