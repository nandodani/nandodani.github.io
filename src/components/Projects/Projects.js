import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Projects.styles.css";

function Projects() {
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="projects main-content">
      <CSSTransition
        in={inProp}
        timeout={300} 
        classNames="fade" 
        unmountOnExit
      >
        <h1>Projects</h1>
      </CSSTransition>
    </div>
  );
}

export default Projects;
