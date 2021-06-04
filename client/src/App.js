import { useEffect, useContext } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { contactListContext } from "./context/ContactListContext";

const App = () => {
  const { setContacts } = useContext(contactListContext);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/contacts");
      const contactsResult = await response.json();
      setContacts(contactsResult.data);
    })();
  }, []);

  return (
    <div className="ui text container">
      <Header />
      <ContactList />
    </div>
  );
};

export default App;
