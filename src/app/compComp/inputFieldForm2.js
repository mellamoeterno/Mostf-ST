import React, { useState } from "react";
//input field form - capture user input, show entered data or submit / validate input
export default function SimpleForm(){

    
    const [formData, setFormData] = useState({
        name: "",
        id: ""
    });
    //what this above const is, is probably for data that will be used later on and updated with an function code to update it and store it
    //the use of the functions name:
    //formData clearly indicates it holds form data
    //setFormData follows the setX naming convention for state setters

    //the single object approach (formData) is cleaner when:
    //You have multiple related fields
    //You need to submit/reset all at once
    //Fields are logically grouped together
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]:value,
        }));

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "name is required";
        }
        if (!formData.email.trim()){
            newErrors.email = "Email is required";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Email must contain @";
        }

        return newErrors;  
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const validadeErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmittedData(formData);
        }
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

