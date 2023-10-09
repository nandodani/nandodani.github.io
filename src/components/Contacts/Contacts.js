import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Contacts.styles.css";

function Contacts() {
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="Contacts main-content">
      <CSSTransition
        in={inProp}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <h1>Contacts</h1>
      </CSSTransition>
    </div>
  );
}

export default Contacts;
