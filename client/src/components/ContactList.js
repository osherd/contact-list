import { useContext, useState } from "react";
import { contactListContext } from "../context/ContactListContext";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts, deleteContact } = useContext(contactListContext);
  const [error, setError] = useState(null);

  const deleteContactHandler = async (name) => {
    const choice = window.confirm(`Are you sure you want to delete ${name}`);
    if (!choice) {
      return;
    }

    setError(null);
    const response = await fetch(`/api/contacts/${name}`, {
      method: "DELETE",
    });

    const deleteContactResult = await response.json();

    if (deleteContactResult.status === "fail" || deleteContactResult.error) {
      setError(deleteContactResult.error);
    } else {
      deleteContact(deleteContactResult.data);
    }
  };

  const displayContactList = contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        onClick={deleteContactHandler}
        key={`${contact.email}${index}`}
      />
    );
  });

  return (
    <div className="ui celled list">
      {contacts.length === 0 && <h3>There a no contacts</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {displayContactList}
    </div>
  );
};

export default ContactList;
