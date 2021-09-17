import * as React from "react";
import { motion } from "framer-motion";

const Spinning = () => {
    return (
        <motion.div
            className="spinning"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{ duration: 2 }}
        />
    );
};

export default Spinning;
