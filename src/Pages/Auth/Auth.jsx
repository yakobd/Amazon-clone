import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
          alt="amazon_flag"
        />
      </Link>

      <div className={classes.login_container}>
        <h1> Sign-In </h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button className={classes.login_signInButton}>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          sale. please see our privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className={classes.create_account_Button}>
          Create Your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
