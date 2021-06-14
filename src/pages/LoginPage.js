import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();
  console.log("auth", localStorage.getItem("isAuthenticated"));

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    window.location.pathname = "/";
    // if (userData.username === "" || userData.password === "") {
    //   setErrorMessage((prevState) => ({
    //     value: "Empty username/password field",
    //   }));
    // } else if (userData.username == "admin" && userData.password == "123456") {
    //   //Signin Success
    //   localStorage.setItem("isAuthenticated", "true");
    //   window.location.pathname = "/";
    // } else {
    //   //If credentials entered is invalid
    //   setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    // }
  };

  return (
    <div className="text-center" style={{height: '250px',display: 'flex',alignSelf:'center'}}>
      <form
        style={{
            margin: 'auto',
            padding: '10px',
            border: '1px solid #c9c9c9',
            borderRadius: '5px',
            background: '#f5f5f5',
            width: '220px',
            display: 'block'
        }}
      >
        <div className="form-group">
          <label style={{
              margin: '10px 0 5px 0',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '15px'
            }}
          >
            Username
         </label>
          <input
            className="form-control"
            type="text"
            name="username"
            style={{margin: '5px 0 10px 0',
                    padding: '5px', 
                    border: '1px solid #bfbfbf',
                    borderRadius: '3px',
                    boxSizing: 'border-box',
                    width: '100%'
                   }}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label style={{
              margin: '10px 0 5px 0',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '15px'
            }}
          >
              Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            style={{margin: '5px 0 10px 0',
            padding: '5px', 
            border: '1px solid #bfbfbf',
            borderRadius: '3px',
            boxSizing: 'border-box',
            width: '100%'
           }}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
                margin: '10px 0 0 0',
                padding: '7px 10px',
                border: '1px solid #efffff',
                borderRadius: '3px',
                background: '#3085d6',
                width: '100%', 
                fontSize: '15px',
                color: 'white',
                display: 'block'
                }}
          onClick={handleSubmit}
        >
          Submit
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;