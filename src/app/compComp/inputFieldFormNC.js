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
    const { name, value } = e.target; // Extracts the field name and its new value from the input
    setFormData((prev) => ({          
      ...prev,                        // Keeps all the existing form data unchanged
      [name]: value,                  // Updates only the specific field that was changed
    }));
  };

//Its like updating a recipe card:

//const { name, value } = e.target = "I see you changed the 'salt' amount to '2 teaspoons'"

//...prev = "Keep everything else on the recipe card exactly as it was"

//[name]: value = "But update the 'salt' amount to say '2 teaspoons' instead"

  // Simple validation 
  const validate = () => {
    const newErrors = {};        // Creates an empty object to collect any validation errors

    if (!formData.name.trim()) { // Checks if name is empty or just whitespace
      newErrors.name = "Name is required";// Adds error message for name field
    }

    if (!formData.email.trim()) {// Checks if email is empty or just whitespace
      newErrors.email = "Email is required";// Adds error message for missing email
    } else if (!formData.email.includes("@")) {// If email exists, checks if it has '@'
      newErrors.email = "Email must contain @";// Adds error for invalid email format
    }

    return newErrors;            // Returns the object containing all found errors (empty if none)
  };

//Its like a teacher grading a test:

//newErrors = {};  Gets a blank grading sheet

//if (!formData.name.trim())   Checks if the student wrote their name

//newErrors.name = "Name is required"   Marks "missing name" on the sheet

//if (!formData.email.includes("@"))   Checks if the email looks right

//return newErrors   Hands back the completed grading sheet with all mistakes noted 


  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();                 // Prevents the page from reloading when form is submitted

    const validationErrors = validate();// Runs validation to check for errors
    setErrors(validationErrors);        // Updates state to show any error messages 

    if (Object.keys(validationErrors).length === 0) {// If no errors found
      setSubmittedData(formData);       // Saves the form data to show success/result
    }
  };

//Its like a club bouncer checking IDs:

//e.preventDefault()  "Hold up, don't let anyone in yet"

//validate()  "Check everyone's IDs"
 
//setErrors()   "Tell people what's wrong with their IDs"

//The if statement    "If all IDs are valid, let everyone in and record their names" 

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
