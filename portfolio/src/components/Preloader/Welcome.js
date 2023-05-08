import React, { useState, useEffect } from "react";
import "./Welcome.css";
import { motion, AnimatePresence } from "framer-motion";

function Welcome(props) {
  let welcomeMessages = [
    "Hello",
    "नमस्ते",
    "ನಮಸ್ಕಾರ",
    "வணக்கம்",
    "హలో",
    "হ্যালো",
  ];

  const [message, setMessage] = useState("Hello");

  const updateMessage = () => {
    setMessage((prev) => {
      let index = welcomeMessages.indexOf(prev) + 1;
      if (index === welcomeMessages.length) {
        props.visibility();
      } else {
        return welcomeMessages[index];
      }
    });
  };

  useEffect(() => {
    setTimeout(updateMessage, 1500);
  }, [message]);

  return (
    <>
      <AnimatePresence>
        <motion.p
          key={message}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="welcome-message"
        >
          {message}
        </motion.p>
      </AnimatePresence>
    </>
  );
}

export default Welcome;
