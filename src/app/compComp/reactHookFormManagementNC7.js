/* // useFormWithValidation.js
import { useState, useCallback } from 'react';

export const useFormWithValidation = (initialValues = {}, validationSchema = {}, onSubmitCallback) => { //useFormWithValidation - here use export const, not export default. Look at grey opera
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback((name, value) => {    //useCallback
    if (!validationSchema[name]) return null;             //validationSchema[name] - return null

    const rules = validationSchema[name];                 
    let error = null;

    // Required validation
    if (rules.required && !value && value !== 0) {
      error = rules.requiredMessage || 'This field is required';
    }
    // Pattern validation
    else if (rules.pattern && value && !rules.pattern.test(value)) {
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