import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import React, { useState } from "react";

function App() {
  const myProjectsArray = ["game", "site", "program"];
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjectsButton = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="App">
      <Navbar color="yellow" />
      <Header title="Hello World!" />

      {/*       <button onClick={handleShowProjectsButton}>Show projects</button>
      {showProjects === true && <Projects projects={myProjectsArray} />}
 */}
      <button onClick={handleShowProjectsButton}>Show Projects</button>
      {showProjects === true ? (
        <Projects projects={myProjectsArray} />
      ) : (
        <p>Nothing to see here!</p>
      )}

      <Footer color="brown" />
    </div>
  );
}

export default App;
