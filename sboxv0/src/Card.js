import React, { useState } from "react";
import { css } from "@emotion/core";
import { motion } from "framer-motion";

const Card = ({ src }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      css={css`
        margin: 10px;
        margin-bottom: 30px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        height: 500px;
        width: 200px;
        background-image: url(${src});
        /* background-image: url("https://vignette.wikia.nocookie.net/blackclover/images/9/9a/Asta_after_Heart_Kingdom_training.png/revision/latest?cb=20191118173358"); */
        background-size: cover;
        background-position: center;
        transition: 0.4s ease-out;
        &:hover {
          filter: grayscale(1);
          filter: blur(4px);
          filter: opacity(50%);
          transition: 0.8s ease-out;
        }
      `}
    ></motion.div>
  );
};
export default Card;
