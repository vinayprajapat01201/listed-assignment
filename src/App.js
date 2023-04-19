import React from "react";
import "./components/login.css";
import google from "./images/google.png";
import apple from "./images/apple.png";


function Login() {
    return(
    <div className="Container__main">
        <div className="banner__name">
            <h1>Board.</h1>
        </div>

        <div className="Container__login">
            <div className="Sign__in__container">
                <div className="heading_section">
                   <bold><h1>Sign in</h1></bold> 
                    <p className="para_in">Sign in your account</p>
                    <div className="heading_cont">
                        <button>
                            <img src={google} alt="logo" />
                            <p>Sign in with Google</p>
                        </button>
                        <button>
                            <img src={apple} alt="logo" />
                            <p>Sign in with Apple</p>
                        </button>
                    </div>
                </div>
                <div className="input_section">
                    <p>Email</p>
                    <input type="email" placeholder="Jhondoe@gmail.com" />
                    <p>Password</p>
                    <input type="password"  placeholder="*******" />
                    <p><a href="#">Forgot Password?</a></p>
                    <button>Sign in</button>
                </div>
                <p className="register__section">Don't have an account?
                    <a href="#">Register Here</a></p>
            </div>
        </div>
    </div>
    )
}
export default Login;