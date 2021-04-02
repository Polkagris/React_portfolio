import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import React, { useState } from "react";

function App() {
  const myProjects = [
    {
      name: "My awesome game",
      id: 1,
      link: "https://www.google.com",
      description: "An awesome game I made",
    },
    {
      name: "My awesome site",
      id: 2,
      link: "https://www.reddit.com",
      description: "An awesome site I coded",
    },
    {
      name: "My awesome program",
      id: 3,
      link: "https://www.reactjs.org",
      description: "An awesome program I wrote",
    },
  ];

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
        <Projects projects={myProjects} />
      ) : (
        <p>Nothing to see here!</p>
      )}

      <Footer color="brown" />
    </div>
  );
}

export default App;
