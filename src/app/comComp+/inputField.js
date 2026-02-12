/* //state for form
//state for data
//state for errors
//handle change
//simple validation
//handle form submit

import React, {useState} from "react";

export default function() {
  const [formData, setFormData] = useState({
   name:"",
   email:"",
  })

  const [submittedData, setSubmittedData] = useState(null);
  const [erros, setErrors] = useState({});

  const handleChange = (e) => {
   const {name,value} = e.target;
   setFormData((prev) => ({
      ...prev,
      [name]:value,
   }))
  }

  const validate = () => {
   const newErrors = {};

   if (!formData.name.trim()) {
      newErrors.name = "blabla";
   }
   if (!formData.email.trim()) {
      newErrors.email = "blabla";
   } else if (!formData.email.includes("@")) {
      newErrors.email = "blabla";
   }

   return newErrors;
  }

  const handleSubmit = (e) => {
   e.preventDefault();

   const errorValidation = validate();

   setErrors(errorValidation);

   if(!Object.keys(errorValidation).length === 0) {
      setSubmittedData(formData);
   }
  }
} */