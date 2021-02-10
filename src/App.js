import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

function App() {
  const myProjectsArray = ["game", "site", "program"];
  return (
    <div className="App">
      <Navbar color="yellow" />
      <Header title="Hello World!" />
      <Projects projects={myProjectsArray} />
      <Footer color="brown" />
    </div>
  );
}

export default App;
