import { motion } from "framer-motion";
import React, { useState } from "react";

import Spinning from "./components/Spinning";
import { Refresh } from "./components/Refresh";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Refresh onClick={() => setCount(count + 1)} />
            <Spinning />
        </div>
    );
}

export default App;
