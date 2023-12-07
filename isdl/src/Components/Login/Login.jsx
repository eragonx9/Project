import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import "./Login.css";


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        setSubmitButtonDisabled(false);
        navigate("/login/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="container12">
      <div className="innerBox12">
        <h1 className="heading12">Login to ECAMS</h1>


         <InputControl
         type="email"
          label="Email"
          placeholder="Enter your email address"
        onChange = {event=>setValues(prev=>({...prev, email:event.target.value}))}   
        />
  
        <InputControl 
        type="password" 
        label="Password" 
        placeholder="Enter Password"
       onChange = {event=>setValues(prev=>({...prev, password:event.target.value}))} 
        />

        <div className="footer12">
          <b className="error">{errorMsg}</b>
          <button 
          onClick = {handleSubmission}
          disabled = {submitButtonDisabled}
          >
            Login</button>
          <p>Don't have an account?{" "}<span>
          <Link to="/signup">Sign up</Link>
            </span>
            </p>
        </div>
         </div>
    </div>
  );
}

export default Login;