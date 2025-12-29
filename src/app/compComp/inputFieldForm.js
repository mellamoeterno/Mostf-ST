import React, { useState } from "react";
//input field form  - capture user input, show entered data or submit / validate input
export default function SimpleForm() {//figure out if what this is doing is just making react see it as (every code inside here is react jsx related)
  //with the "export default function" signaling it.
  // State for form values - 1 useState
  const [formData, setFormData] = useState({ //array destructuring data from useState, atrieving initial value type, and update function, assigned to fromData and setFromData.
    name: "",
    email: "",
  }); // ({}) triggering useState, cause if not done it wont be shot right away, and will only be showing there.
// and also ({}) is setting some object with {} which is just data.
// in here () is used to trigger right away cus if not it`ll only be referencing the useState and it wont do nothing.
//with that cleared, what exactly is () triggering in useState tho. 
//if it was a function being declared by myself i`d know what was the code inside. But useState is an api method

  // State for errors - 2 useState stateErrors
  const [errors, setErrors] = useState({});//and in here is just initialized but with empty code in {}, although it also works in a way as paremeter because its
  //inside () but how that work? That work by giving initial value an type, this type being empty object ({}).
  //gotta learn what these initial values are actually for...
  
  const [submittedData, setSubmittedData] = useState(null);

  // Handle field changes - 3 handleChange methoddddddd
  const handleChange = (e) => { //(e) object with information about events that just occured (mouse usage, keyboard keys clicked, etc) but with () => {}
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simple validation - 4 validate
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) { // ! exclamation mark reverses the result logic, from false to true, from true to false.
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No validation errors
      setSubmittedData(formData);
    }
  };

  return (
    <div style={{ width: "320px", margin: "40px auto" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div style={{ marginBottom: "12px" }}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "6px" }}
            />
          </label>
          {errors.name && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {errors.name}
            </div>
          )}
        </div>

        {/* Email field */}
        <div style={{ marginBottom: "12px" }}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "6px" }}
            />
          </label>
          {errors.email && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Show submitted data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
}
