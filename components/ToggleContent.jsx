import { useState } from "react";
import { motion } from "framer-motion";

const ToggleContent = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout className="text-2xl text-blue-800">
        {header}
      </motion.h2>
      {isOpen && children}
    </motion.div>
  );
};

export default ToggleContent;
