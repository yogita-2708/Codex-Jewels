import React, { useState } from "react";
//import { useSignupData } from "./SignupDataContext";

function SignUp() {
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  async function handleSubmit() {
    try {
      const isPasswordValid = validateForm();
      if (!isPasswordValid) {
        return;
      }
      
      let obj = {
        id: Date.now(),
        mobileNo,
        email,
        fname,
        lname,
        password,
        cpassword,
      };
      let res = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data);
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const validateForm = () => {
    const passwordType =
      /^(?=.*[A-Za-z]{3})(?=.*\d{2})(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{6,}$/;
    if (!passwordType.test(password)) {
      alert(
        "Password must contain at least 6 characters with 3 alphabets, 2 numbers, and a special character."
      );
      return false;
    }

    if (password !== cpassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  return (
    <div className="App">
      <h1>Sign Up With CaratLane</h1>
      <p>
        Unlock Best prices and become an insider for our exclusive launches &
        offers. Complete your profile and get ₹250 worth of xCLusive Points.
      </p>
      <form>
        <div className="mobmail">
          <input
            type="number"
            name="mobileNo"
            placeholder="Mobile Number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required={true}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <div className="name">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required={true}
          />

          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required={true}
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />

          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required={true}
          />
        </div>{" "}
        <div class="option-container">
          <label class="option">
            <input type="radio" name="gender" value="male" required />
            Male
          </label>
          <label class="option">
            <input type="radio" name="gender" value="female" />
            Female
          </label>
          <label class="option">
            <input type="radio" name="gender" value="other" />
            Other
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Sign Me Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
