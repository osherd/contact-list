const contactListReducer = (state, action) => {
  switch (action.type) {
    case "set": {
      return action.payload;
    }
    case "delete": {
      const contactToRemove = action.payload;
      const contactToRemoveName =
        contactToRemove.name.title +
        contactToRemove.name.first +
        contactToRemove.name.last;

      return state.filter(
        (contact) =>
          !(contact.name.title + contact.name.first + contact.name.last)
            .toLowerCase()
            .includes(contactToRemoveName.toLowerCase())
      );
    }
    case "sort": {
      const isReversed = action.payload;
      [].sort();
      return [...state].sort(
        (contact1, contact2) =>
          contact1.name.first.localeCompare(contact2.name.first) *
          (isReversed ? -1 : 1)
      );
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { contactListReducer };
