import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Course } from "./components/Course/Course";
import { Activity } from "./components/Activity/Activity";
import Certificate from "./components/certificate/certificate";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Course />
      <Activity/>
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
}

export default App;
