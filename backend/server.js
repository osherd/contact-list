const express = require("express");
const contacts = require("./contacts.json").results;

const PORT = 4000;
const app = express();

app.get("/api/contacts", (req, res) => {
  res.json({ status: "ok", data: contacts });
});

app.get("/api/contacts/:name", (req, res) => {
  const name = req.params.name;
  const contactsFound = contacts.filter((contact) =>
    (contact.name.title + contact.name.first + contact.name.last)
      .toLowerCase()
      .includes(name.toLowerCase())
  );

  if (contactsFound.length > 1) {
    res.json({
      status: "fail",
      error: "More than one contact found",
    });
  } else {
    if (contactsFound.length === 0) {
      res.json({
        status: "fail",
        error: "No contact found",
      });
    } else {
      res.json({ status: "ok", data: contactsFound[0] });
    }
  }
});

app.delete("/api/contacts/:name", (req, res) => {
  const name = req.params.name;

  const contactsFound = contacts.filter((contact) =>
    (contact.name.title + contact.name.first + contact.name.last)
      .toLowerCase()
      .includes(name.toLowerCase())
  );

  if (contactsFound.length > 1) {
    res.json({
      status: "fail",
      error: "More than one contact found",
    });
  } else {
    if (contactsFound.length === 0) {
      res.json({
        status: "fail",
        error: "No contact found",
      });
    } else {
      const indexToDelete = contacts.indexOf(contactsFound[0]);
      const contactDeleted = contacts.splice(indexToDelete, 1)[0];
      res.json({ status: "ok", data: contactDeleted });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
