import React, { useState } from "react";
import GoogleLogin from "react-google-login";
export default function SignIn() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const handleLoginFailure = (res) => {
    console.log(res);
  };
  const handleLoginSuccess = (res) => {
    console.log(res);
  };
  const handleNameChange = (event) => {
    setUsername(event.target.value);
    console.log(Username);
  };
  const handleNameChange = (event) => {
    setUsername(event.target.value);
    console.log(Username);
  };
  async function PostSignIn(Username, Password) {
    const data = {
      Email: Username,
      Password: Password,
    };
    const response = await fetch("http://localhost:3000/authlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    return await response.json();
  }
  return (
    <div className="App">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}
          <h2 className="active"> Sign In </h2>
          <h2 className="inactive underlineHover">Sign Up </h2>
          {/* <!-- Icon --> */}
          <div className="fadeIn first">
            <img id="icon" alt="User Icon" />
          </div>
          {/* <!-- Login Form --> */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
              onChange={handleNameChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <a className="underlineHover" href="/">
              Forgot Password?
            </a>
          </div>
          <div>
            <GoogleLogin
              clientId="47631250735-m0pnlki1jri3f37khqmtcdg5o4v0eq6r.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
