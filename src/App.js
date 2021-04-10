import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";
import { Post } from "./Post/Post";

export const ProjectContext = React.createContext();

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

  const [postData, setPostData] = useState({});

  const fetchPost = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts/1", {
      headers: {
        "Content-type": "application/json;",
      },
    });
    console.log("RESULT FROM FETCH TODOS:", result);
    setPostData(result.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <ProjectContext.Provider value={myProjects}>
        <div className="App">
          <Navbar color="yellow" />
          <Header title="Hello World!" />
          <Post postData={postData} />

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
      </ProjectContext.Provider>
    </>
  );
}

export default App;
