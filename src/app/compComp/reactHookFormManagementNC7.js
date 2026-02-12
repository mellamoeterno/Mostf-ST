/* // useFormWithValidation.js
import { useState, useCallback } from 'react';

export const useFormWithValidation = (initialValues = {}, validationSchema = {}, onSubmitCallback) => { //useFormWithValidation made available to other modules by 'export'
  const [values, setValues] = useState(initialValues); //it seems that this is like (useState(initialValues) = Making a copy of that to work with)
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback((name, value) => {    //useCallback hook
    if (!validationSchema[name]) return null;             //validationSchema[name] - return null

    const rules = validationSchema[name];                 
    let error = null;
 
    // Required validation
    if (rules.required && !value && value !== 0) { //Field must have a value, 0 is considered a valid value (not empty)
      error = rules.requiredMessage || 'This field is required';//Error message: rules.requiredMessage or default "This field is required"
    }
    // Pattern validation
    else if (rules.pattern && value && !rules.pattern.test(value)) {  //3 conditions must ALL be true to trigger error:        //1 
                                                                                                                               //rules.pattern exists
                                                                                                                               //The field must have a pattern rule defined
                                                                                                                               //pattern should be a RegExp (regular expression) object
                                                                                                                               //2
                                                                                                                               //value exists (truthy)
                                                                                                                               //The field must have a value (not empty/null/undefined)
                                                                                                                               //Pattern validation only runs when there's a value
                                                                                                                               //Empty fields won't trigger pattern errors (they'd trigger required errors instead)
                                                                                                                               //3
                                                                                                                               //!rules.pattern.test(value) is true
                                                                                                                               //The RegExp test() method returns false for the value
                                                                                                                               //The value does NOT match the pattern
                                                                                                                               //The ! (NOT) operator makes this true when test fails 

      error = rules.patternMessage || 'Invalid format';
    }
    // Min length validation
    else if (rules.minLength && value && value.length < rules.minLength) {
      error = rules.minLengthMessage || `Minimum ${rules.minLength} characters required`;
    }
    // Max length validation
    else if (rules.maxLength && value && value.length > rules.maxLength) {
      error = rules.maxLengthMessage || `Maximum ${rules.maxLength} characters allowed`;
    }
    // Custom validation function
    else if (rules.validate && typeof rules.validate === 'function') {
      const customError = rules.validate(value, values);
      if (customError) error = customError;
    }

    return error;
  }, [validationSchema, values]);

//better visualisation on this whole caca:
//  
//rules.pattern.test(value) = "Does it match?"
//!rules.pattern.test(value) = "Does it NOT match?"


  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationSchema).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validateField, validationSchema, values]);

  // Handle input change with validation
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setValues({
      ...values,
      [name]: fieldValue,
    });

    // Validate field if it's been touched
    if (touched[name]) {
      const error = validateField(name, fieldValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  // Handle blur event
  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    const error = validateField(name, values[name]);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(values).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate all fields
    const isValid = validateForm();
    
    if (!isValid) {
      console.log('Form has errors:', errors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (onSubmitCallback) {
        await onSubmitCallback(values);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle API errors here
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    validateForm,
    setValues,
    setFieldValue: (name, value) => {
      setValues(prev => ({ ...prev, [name]: value }));
    },
    setFieldError: (name, error) => {
      setErrors(prev => ({ ...prev, [name]: error }));
    },
  };
}; */