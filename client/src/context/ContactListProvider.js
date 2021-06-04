import { useReducer } from "react";
import { contactListContext } from "./ContactListContext";
import { contactListReducer } from "./ContactListReducer";

const ContactListProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactListReducer, []);

  const setContacts = (newContacts) => {
    dispatch({
      type: "set",
      payload: newContacts,
    });
  };

  const deleteContact = (name) => {
    dispatch({
      type: "delete",
      payload: name,
    });
  };

  const sortContacts = (isReversed) => {
    dispatch({
      type: "sort",
      payload: isReversed,
    });
  };

  const contextValue = { contacts, setContacts, deleteContact, sortContacts };
  return (
    <contactListContext.Provider value={contextValue}>
      {children}
    </contactListContext.Provider>
  );
};

export { ContactListProvider };
