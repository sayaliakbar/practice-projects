const useErrorHandler = () => {
  const handleError = (err) => {
    if (err.response) {
      const status = err.response.status;
      const message = err.response.data?.message || "Server Error";
      switch (status) {
        case 400:
          return "Invalid input. Please check your data.";
        case 401:
          return "Unauthorized. Please check your credentials.";
        case 403:
          return "Access denied.";
        case 404:
          return "Resource not found.";
        case 500:
          return "Server error. Try again later.";
        default:
          return message;
      }
    } else if (err.request) {
      return "No response from server. Please check your internet connection.";
    } else {
      return "Unexpected error. Please try again.";
    }
  };

  return { handleError };
};

export default useErrorHandler;
