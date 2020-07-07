import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    console.log(event.target.value);
    if (event.target.name === "fName") {
      setContact({
        fName: event.target.value,
        lName: contact.lName,
        email: contact.email
      });
    } else if (event.target.name === "lName") {
      setContact({
        fName: contact.fName,
        lName: event.target.value,
        email: contact.email
      });
    } else if (event.target.name === "email") {
      setContact({
        fName: contact.fName,
        lName: contact.lName,
        email: event.target.value
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
