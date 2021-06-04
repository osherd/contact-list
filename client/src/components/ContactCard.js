const ContactCard = ({ contact, onClick }) => {
  const { gender, name, email, phone, cell, picture } = contact;

  const handleClick = () => {
    onClick(name.title + name.first + name.last);
  };

  return (
    <div className="item">
      <img
        className="avatar"
        src={picture.medium}
        alt="avatar"
        style={{
          borderColor: gender === "male" ? "red" : "green",
        }}
      />
      <div className="content">
        <div className="header">
          {name.title} {name.first} {name.last}
        </div>
        <a href={`mailto:${email}`}>
          <div>{email}</div>
        </a>
        <div>{phone}</div>
        <div>{cell}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={handleClick}
      ></i>
    </div>
  );
};

export default ContactCard;
