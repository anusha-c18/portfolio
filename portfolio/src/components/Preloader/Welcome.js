import React, { useState, useEffect } from "react";
import "./Welcome.css";

function Welcome() {
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
    console.log(message, " entered");
    setMessage((prev) => {
      let index = welcomeMessages.indexOf(prev) + 1;
      console.log("setting message ", index);
      if (index >= welcomeMessages.length) {
        return "";
      } else {
        console.log("updating message ", welcomeMessages[index]);
        return welcomeMessages[index];
      }
    });
  };

  useEffect(() => {
    setTimeout(updateMessage, 1000);
  }, [message]);

  return (
    <>
      <p className="welcome-message">{message}</p>
    </>
  );
}

export default Welcome;
