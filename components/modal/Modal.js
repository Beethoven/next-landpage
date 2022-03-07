import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import { MdClose } from "react-icons/md";

const zoomIn = {
  hidden: {
    y: "32",
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    y: "32",
    opacity: 0,
    scale: 0.7,
  },
};

const Modal = ({ modalOpen, close, children }) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {modalOpen && (
        <Backdrop onClick={close}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-lg bg-slate-100 p-12 shadow-lg"
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 rounded-full bg-gray-300 p-2"
              onClick={close}
            >
              <MdClose className="text-2xl" />
            </button>
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
