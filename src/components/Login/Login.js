import { Link } from 'react-router-dom';
import "../Login/login.css";
import google from "../../images/google.png";
import apple from "../../images/apple.png";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const signInUser = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("name", auth.currentUser.displayName);
      localStorage.setItem("photoUrl", auth.currentUser.photoURL);
      navigate("/Dashboard");
    });
  };

  return (
    <div className="Container__main">
      <div className="Header__section">
        <h1>Board.</h1>
      </div>

      <div className="Container__login">
        <div className="Sign__in__container">
          <div className="heading_section">
            <bold>
              <h1>Sign in</h1>
            </bold>
            <p className="para_in">Sign in your account</p>
            <div className="heading_cont">
              <button onClick={signInUser}>
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
            <input type="password" placeholder="*******" />
            <p>
              <Link to="#">Forgot Password?</Link>
            </p>
            <button>Sign in</button>
          </div>
          <p className="register__section">
            Don't have an account?
            <Link to="#">Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
