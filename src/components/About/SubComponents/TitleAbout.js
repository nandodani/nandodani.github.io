import React from "react";
import { motion } from "framer-motion";

function TitleAbout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="page-title">
          <h1>
            Half developer,
            <br />
            half designer,
            <br />
            full creative
          </h1>
        </div>
      </motion.div>
    </>
  );
}

export default TitleAbout;