import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import axios from "axios"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("")
    setSuccess("")

    try{
      const response = await axios.post("http://localhost:5000/api/login",{
        username,
        password
      })
      console.log(response.status)

      if(response.status == 200) {
        const user = response.data.user;
        localStorage.setItem("username", user.username);
        navigate("/profile");
        // setSuccess("Signup is successful")
        // setUsername("")
        // setPassword("")
        // setEmail("")
        // setPhone("")
        // setConfirmPassword("")
      }
    }catch(e){
      if(error.response)
      {
        setError(error.response.data.message || "Error")
      }
      else{
        setError("Server Error")
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Members Log in</h2>
      <p style={styles.description}>
        From students, for students—VJTI OLX makes buying and selling smarter!
      </p>
      <form style={styles.form} onSubmit={handleLogin}>
        {/* Username */}
        <div style={styles.inputGroup}>
          <i className="fas fa-user" style={styles.icon}></i>
          <input
            type="text"
            placeholder="Username"
            value = {username}
            onChange = {(e)=>{setUsername(e.target.value)}}
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
            value = {password}
            onChange = {(e)=>{setPassword(e.target.value)}}
            style={styles.input}
            required
          />
        </div>
        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Log In
        </button>
        <p style={styles.register}>
  Don’t have an account? <a href="/signup" style={styles.registerLink}>REGISTER HERE</a>
</p>
      </form>
      <footer style={styles.footer}>
        <a href="" style={styles.socialMediaLink}>
          Check us out!
        </a>
        <p>Got something to sell? Start now</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
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

export default LoginForm;
