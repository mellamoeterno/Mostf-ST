/* //state for form
//state for data
//state for errors
//handle change
//simple validation
//hadle form submit

import React, { useState } from "react";

export default function() {

const [formData, setFormData] = useState({
  name:"",
  value:"",
});
const [submittedData, setSubmittedData] = useState(null);
const [errors, setErrros] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }))
};


const validation = () => {
 const newErrors = {};

 if (!formData.name.trim("")){
    newErrors.name = "must contain"
 }
 if (!formData.email.trim("")){
    newErrors.email = "must contain"
 } else if (!formData.email.includes("@")){
    newErrors.email = "must inlcude"
 }

 return newErrors;
}

const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validation();

  setErrros(validationErrors);

  if (Object.keys(validationErrors).lengt === 0){
     setSubmittedData()
  }
}




}; */