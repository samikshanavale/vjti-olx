import React from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add sign-up logic here if needed
    navigate("/marketplace"); // Redirect to MarketPlace after successful sign-up
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create an Account</h2>
      <p style={styles.description}>
        Join VJTI OLX and start buying and selling smarter!
      </p>
      <form style={styles.form} onSubmit={handleSignup}>
        {/* Full Name */}
        <div style={styles.inputGroup}>
          <i className="fas fa-user" style={styles.icon}></i>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
            required
          />
        </div>

        {/* Username */}
        <div style={styles.inputGroup}>
          <i className="fas fa-user" style={styles.icon}></i>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            required
          />
        </div>

        {/* Email */}
        <div style={styles.inputGroup}>
          <i className="fas fa-envelope" style={styles.icon}></i>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            required
          />
        </div>

        {/* Phone */}
        <div style={styles.inputGroup}>
          <i className="fas fa-phone" style={styles.icon}></i>
          <input
            type="tel"
            placeholder="Phone"
            style={styles.input}
            required
          />
        </div>

        {/* Password */}
        <div style={styles.inputGroup}>
          <i className="fas fa-lock" style={styles.icon}></i>
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            required
          />
        </div>

        {/* Confirm Password */}
        <div style={styles.inputGroup}>
          <i className="fas fa-lock" style={styles.icon}></i>
          <input
            type="password"
            placeholder="Confirm Password"
            style={styles.input}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Sign Up
        </button>

        <p style={styles.register}>
          Already have an account? <a href="/login" style={styles.registerLink}>LOGIN HERE</a>
        </p>
      </form>
      <footer style={styles.footer}>
        <a href="/" style={styles.socialMediaLink}>
          Check us out!
        </a>
        <p>Got something to sell? Start now</p>
      </footer>
    </div>
  );
};

const styles = {
    container: {
        width: "500px", // Explicitly set the width
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#fdfdfd",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
      },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    width: "100%",
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: "10px",
    fontSize: "18px",
    color: "#888",
  },
  input: {
    width: "100%",
    padding: "10px 35px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#f8c11c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  register: {
    fontSize: "14px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#888",
  },
  socialMediaLink: {
    color: "#4267B2", // Facebook blue
    textDecoration: "none",
    fontWeight: "bold",
  },
  registerLink: {
    color: "#4267B2",  // Blue color for the link
    textDecoration: "none",  // Optional: removes the underline
  },
};

export default SignupForm;
