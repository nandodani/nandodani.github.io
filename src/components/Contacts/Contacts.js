import React from "react";
import "./Contacts.styles.css";
import TitleContacts from "./SubComponents/TitleContacts";
import ContactsLinks from "./SubComponents/ContactsLinks";

function Contacts() {
  return (
    <div className="contacts main-content">
      <TitleContacts />
      <ContactsLinks />
    </div>
  );
}

export default Contacts;
