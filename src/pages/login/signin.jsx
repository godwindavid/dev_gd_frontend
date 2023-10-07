import React, { useContext, useMemo } from "react";
import { UserService } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import appContext from "../../appContext";

const SignInForm = () => {
  const { setToken } = useContext(appContext)
  const userService = new UserService();
  const navigate = useNavigate()
  const initialState = useMemo(() => ({ email: "", password: "" }), [])
  const [state, setState] = React.useState(initialState);

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();
    const response = await userService.login(state)
    if (response?.data) {
      console.log("hiii", response.data)
      setToken(JSON.stringify(response.data))

      localStorage.setItem("userData", JSON.stringify(response?.data))
      navigate("/home")
    }
    setState(initialState)
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        {/* <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span> */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
