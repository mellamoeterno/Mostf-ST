/* //state for form
//state for errors
//state for submitted data
//handle change
//simple validation
//handle form submit
//no validation

import React, { useState } from "react";

export default function toDoList(){

    const [formData, setFormData ] = useState({
        email: "",
        name: "",
    });
    
    const [errors, setErrors ] = useState({});
    const [submittedData, setSubmittedData ] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target; //destructuring name and value from e.target with {} because its an object being destructured.
        setFormData((prev) => ({        //triggering setFormData to use the update function stored in set form data, and setting 
            ...prev,
            [name]:value,               //i dont know why tf, but this just means it Creates:{email: "john@example.com"} from the user input. sum called computed property name.
        }));                            //more abt this in prev grey opera.....

    };
                                        //[name]: value creates an object where the property name is whatever value is in the name variable, and assigns the value to it.
                                        //So when name = "email" and value = "john@example.com"
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name  = "name is required"
        }

        if (!formData.email.trim()) {
            newErrors.email = "email is required"
        } else if (!formData.email.includes("@")) {
            newErrors.email = "email must contain @"
        }

        return newErrors;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 ) {
            setSubmittedData(formData);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0) {
            setSubmittedData(formData);
        }
    }
} */