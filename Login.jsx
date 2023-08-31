import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/users");
      if (res.ok) {
        let data = await res.json();
        const user = data.find((user) => user.email === email || user.mobileNo === mobileNo);
        if (user) {
          // Successful login
          console.log("Login successful");
          setLoginError("");
        } else {
          // Invalid credentials
          setLoginError("Invalid credentials");
        }
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="App">
      <form>
        <div className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />

          <input
            type="number"
            name="mobileNo"
            placeholder="Enter mobile number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required={true}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Login</button>
        {loginError && <div className="error">{loginError}</div>}
        <div>
          <p>If new user then first SIGNUP</p>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
