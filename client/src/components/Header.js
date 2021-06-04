import { useContext, useState } from "react";
import { contactListContext } from "../context/ContactListContext";

const Header = () => {
  const { contacts, sortContacts } = useContext(contactListContext);
  const [isReversed, setIsReversed] = useState(false);

  const handleSortArrowClick = () => {
    sortContacts(isReversed);
    setIsReversed(!isReversed);
  };

  return (
    <div className="ui center aligned header">
      <div className="contact-list">
        <h2>
          Contact List: {contacts.length} contacts
          <i
            className={`angle ${isReversed ? "down" : "up"} icon`}
            onClick={handleSortArrowClick}
          ></i>
        </h2>
      </div>
    </div>
  );
};
export default Header;
