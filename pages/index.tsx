import styles from "styles/Home.module.css";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "@components/modal";

const Home = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <Layout>
      <SEO />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      <div className="text-5xl font-bold">Home</div>

      <Modal modalOpen={modalOpen} close={close}>
        <div className="text-5xl font-bold">Modal</div>
      </Modal>
    </Layout>
  );
};

export default Home;
