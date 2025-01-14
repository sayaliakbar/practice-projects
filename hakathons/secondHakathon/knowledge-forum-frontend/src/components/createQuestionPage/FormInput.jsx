const FormInput = ({ label, value, onChange, type = "text", placeholder }) => (
  <div className="mb-4">
    <label className="block font-medium mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
    />
  </div>
);

export default FormInput;
