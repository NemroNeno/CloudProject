import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import MainNavigation from "../MainNavigation/MainNavigation";

function Login(props) {
  const [focusState, setFocusState] = useState({
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);


  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    setError("");

    try {
      const apiEndpoint = process.env.REACT_APP_AUTH_BACKEND;
      const response = await axios.post(`${apiEndpoint}/users/login`, values);
      signIn({
        token: response.data.token,
        userId: response.data.userId,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: {
          email: values.email,
          userId: response.data.userId,
          token: response.data.token,
        },
      });
      localStorage.setItem("authToken", response.data.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);
      toast.error("Wrong Credentials!");
      console.log("Error: ", err);
    }
  };
  const registerHandler = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  const handleInputFocus = (field) => {
    setFocusState((prevFocusState) => ({ ...prevFocusState, [field]: true }));
  };

  const handleInputBlur = (field) => {
    setFocusState((prevFocusState) => ({ ...prevFocusState, [field]: false }));
  };

  const homeHandler = () => {
    navigate("/")
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        <span className="h1 fw-bold mb-0">CloudReel</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={() => handleInputBlur("email")}
                          onFocus={() => handleInputFocus("email")}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="form2Example27"
                          className="form-control form-control-lg"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={() => handleInputBlur("password")}
                          onFocus={() => handleInputFocus("password")}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <span className="eye-icon-container form-outline col-2"
                          style={{
                            position: 'relative',
                            top: '-2.2rem',
                            left: '27rem'
                          }}>
                          <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="eye-icon"
                            onClick={togglePasswordVisibility}
                          />
                        </span>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting ? "Logging in..." : "Login"}
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <span
                          style={{ color: "#393f81", cursor: "pointer", textDecoration: "underline" }}
                          onClick={registerHandler}
                        >
                          Register here
                        </span>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
