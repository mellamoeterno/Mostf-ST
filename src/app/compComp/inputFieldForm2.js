import React, { useState } from "react";
//input field form - capture user input, show entered data or submit / validate input
export default function SimpleForm(){

    
    const [formData, setFormData] = useState({
        name: "",
        id: ""
    });
    //what this above const is, is probably for data that will be used later on and updated with an function code to update it and store it.
    //
    //the use of the functions name:
    //formData clearly indicates it holds form data
    //setFormData follows the setX naming convention for state setterssssss

    //the single object approach (formData) is cleaner when:
    //You have multiple related fields
    //You need to submit/reset all at once
    //Fields are logically grouped together
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name,value } = e.target; //destructuring name, value from e.target, using {} because e.target is an object (a DOM element object)
                                         //e.target gets the name, value and assign to the destructuring - const {name, value} = e.target;
        setFormData((prev) =>({          //prev is basically for updating the state based on previous value.      
            ...prev,
            [name]:value,
        }));
        //about prev
        //prev is used exclusively with state update functions in React when you use the functional update pattern.
        //
        //
        //about (() => ({}))
        //this is handle gun for use arrow function ,but using ({}) and being at the same time inside one ()
        //why it has to be ({}) instead of normal ()?
        //
        //answer: () makes the {} be read by javascript as a object, and wont throw errors when using prev. 
        //
        //The setFormData has the updateFunction from useState, which is used to update the data from formData.
        //as if its triggering an change into the data itself, without it wouldnt update, and remain static.

        //here we get the use of the 'e' inside the parameter of the arrow function, if i had to guess what its doing
        //is that its using all the curly brace logic to listen and then pass all to handleChange
        //
        //The answer and a better explaining is:
        // "When you give me 'e', I will process it like this..."
        //
        //  const machineBlueprint = (e) => {
        //   Do stuff with e
        //  };
        //
        //
        //
        //a new question is, when the () is empty, does it stop saying "when you give me this, I will process it like this..."?
        //so the answer is: "I don't need any information - I'll just do my thing"
        //
        //in this handleChange function (e) is needed for the use if 'e' is inside the curly braces logic. Which is e.target
        //
        //in the case of having an empty () when using arrow function, itll just simply be like () => triggers/sets up the code inside {} to wait
        //
        //and as we already know, having something inside () like (e) is just an request of information before inside of {} to actually work.
        //
        //const { name,value } is destructuring 'e.target'  

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
        /* else if:   it provides an alternative code path when an if condition is not met. (and has same syntax as if statement) also else cannot be used alone. 

        It always requires a preceding if statement.

        */

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

