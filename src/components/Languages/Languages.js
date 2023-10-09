import React, { useState } from "react";
import { ReactComponent as Portuguese } from "../../assets/images/Portuguese.svg";
import { ReactComponent as English } from "../../assets/images/English.svg";
import "./Languages.styles.css";

function LanguageToggle() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    if (language === "pt") {
      setLanguage("en");
    } else {
      setLanguage("pt");
    }
  };

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === "pt" ? <Portuguese className="svg"/> : <English />}
    </button>
  );
}

export default LanguageToggle;
