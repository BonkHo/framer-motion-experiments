import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import Modal from "./components/Modal";

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <div className="App">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => (modalOpen ? close() : open())}
            >
                Launch Modal
            </motion.button>

            <AnimatePresence
                inital={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modalOpen && (
                    <Modal modalOpen={modalOpen} handleClose={close}></Modal>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
