import React from "react";
import { motion } from "framer-motion";

function TitleProjects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="page-title">
          <div className="quote-title">
            <h1>"Creativity is intelligence having fun."</h1>
            <span className="span-author">Albert Einstein</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TitleProjects;
