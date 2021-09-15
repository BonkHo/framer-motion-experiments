import { motion } from "framer-motion";

// Backdrop component that will hold our text and button
const BackDrop = ({ children, onClick }) => {
    return (
        <motion.div
            className="backdrop"
            onClick={onClick}
            initial={{ opactiy: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default BackDrop;
