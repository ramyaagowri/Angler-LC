import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("data ", formData);
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name field is required";
    }
    if (!formData.email) {
      newErrors.email = "Email field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Provide Valid Email ID";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length == 0) {
      alert(
        `User succesfully created ! \nName : ${formData.name} \nEmail Id :${formData.email}`
      );
      setFormData({ name: "", email: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <label>Name : </label>
        <div>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          {errors.name ? (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {errors.name}
            </span>
          ) : (
            <></>
          )}
        </div>

        <label>Email id : </label>
        <div>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          {errors.email ? (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {errors.email}
            </span>
          ) : (
            <></>
          )}
        </div>

        <button type="submit" style={{ padding: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
