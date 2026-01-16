import React, { useState } from "react";

export default function SimpleForm() {

  //statte for form data ({name:"", email:"",}) 
  const [formData, setFormData] = useState({ 
    name: "",
    email: "",
  }); 


  // State for errors ({})
  const [errors, setErrors] = useState({});
 
  //state for submittedData(null)
  const [submittedData, setSubmittedData] = useState(null);

  // Handle field changes 
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simple validation 
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) { 
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
     // No validation errors
    if (Object.keys(validationErrors).length === 0) {
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
