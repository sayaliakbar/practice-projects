// errorHandler.js
export const handleError = (err, setErrors) => {
  if (err.response?.data?.errors) {
    setErrors(err.response.data.errors);
  } else if (err.response?.data?.message) {
    setErrors([{ message: err.response.data.message }]);
  } else if (err.message) {
    setErrors([{ message: err.message }]);
  } else {
    setErrors([{ message: "Failed to respond. Please try again!" }]);
  }
};
