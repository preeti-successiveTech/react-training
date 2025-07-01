import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && <p style={{ color: "green" }}>Registration successful!</p>}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
