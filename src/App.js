import Home from './component/home/Home'
import AboutMe from './component/aboutMe/AboutMe'
import Project from './component/projects/Project'
import Experience from './component/experience/Experience';
import Skills from './component/skills/Skills';
import Contact from './component/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Experience/>
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
