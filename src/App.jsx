import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

export default class App extends React.Component {
  sections = [
    "Home",
    "About",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  constructor(props) {
    super(props);
    this.state = { activeSection: "Home", navShadow: false };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.updateNav);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.updateNav);
  }

  updateNav = (e) => {
    const active = this.sections.find((section) => {
      const div = document.getElementById(section);
      return (
        window.scrollY >= div.offsetTop &&
        window.scrollY < div.offsetTop + div.offsetHeight
      );
    });

    this.setState({ activeSection: active, navShadow: window.scrollY !== 0 });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          sections={this.sections}
          active={this.state.activeSection}
          shadow={this.state.navShadow}
        />

        <div className="page-wrapper">
          <Home />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    );
  }
}
