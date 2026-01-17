/* //to do list app, capture user input, show entered data, submit and validate input.
//state for form data - formData - setFormData ({name: "", value:"",})
//state for errors - errors - setErrors ({})
//state for handlesubmit - submittedData - setSubmittedData (null)
//const handleChange
//simple validation
//handle form submit
//no validation errors

import React, {useState} from "react";

export default function() {
       
       const [formData, setFormData] = useState({
        name:"",
        value:"",
       });
       const [errors, setErrors] = useState({});
       const [submittedData, setSubmittedData] = useState(null);

       const handleChange = (e) => {
        const {value, name} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))
        }
        
        const validate = () => {
         const newErrors = {};

         if (!formData.name.trim()) {
            newErrors.name = "blabla"
         }
         if (!formData.email.trim()) {
            newErrors.email = "blabla"
         } else if (!formData.email.include("@")) {
            newErrors.email = "blabla"

            return newErrors;
        }
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            const validationErros = validate();

            setErrors(validationErrors);
            
            if (Object.keys(validationErros).length === 0) { 
                setSubmittedData(formData);                   //figure out how ts workkk    
            }
        }
       



































    return (
    <div style={{ width: "320px", margin: "40px auto" }}>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
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
} */