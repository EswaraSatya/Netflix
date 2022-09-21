import React, { useState } from "react";
import "./LoginScreen.css";
import { SignUpScreen } from "./SignUpScreen";
export const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          alt="netflix logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <select className="loginScreen_select" name="language" id="language">
          <option value="volvo">English</option>
          <option value="opel">Hindi</option>
        </select>
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
