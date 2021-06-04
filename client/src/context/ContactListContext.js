import { createContext } from "react";

const contactListContext = createContext({
  contacts: [],
  setContacts: (newContacts) => {
    throw new Error("You used context without provider");
  },
  deleteContact: (name) => {
    throw new Error("You used context without provider");
  },
  sortContacts: (isReversed) => {
    throw new Error("You used context without provider");
  },
});

export { contactListContext };
