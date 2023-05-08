import "./App.css";
import React, { useState } from "react";
import Welcome from "./components/Preloader/Welcome";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [preloader, setPreloader] = useState("true");

  const updatePreloaderVisibility = () => {
    setPreloader(false);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      {!preloader ? <Navigation></Navigation> : null}
      {preloader ? (
        <Welcome visibility={updatePreloaderVisibility}></Welcome>
      ) : null}
    </div>
  );
}

export default App;
