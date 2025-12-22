/* import React, { useState } from "react";

export default function inputField(){
    // State for form values 1

    const [formData, setFormData] = useState({
        name: "",
        id: ""
    })
    const [erros, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
   // Handle field changes 2 
    const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]:value,
        }));

    // Simple validation 3
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

    // Handle form submit 4 
    const handleSubmit = (e) => {
        e.preventDefault();

        const validadeErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmittedData(formData);
        }
    }
    };
}

 */