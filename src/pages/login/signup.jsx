import React, { useContext, useMemo } from "react";
import { UserService } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import appContext from "../../appContext";



const SignUpForm=() => {
    const {setToken} = useContext(appContext)
  const navigate = useNavigate()
    const userService = new UserService();
    const initialState = useMemo(() => ({  name: "",  email: "",  password: ""}), [])

    const [userData, setUserData] = React.useState(initialState);

    const handleChange = evt => {
        const value = evt.target.value;
        setUserData({
            ...userData,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit =async (evt) => {
        evt.preventDefault();
        const response =await userService.signUp(userData)
        console.log(response)
        if(response.data){
setToken(JSON.stringify(response.data))
            localStorage.setItem("userData", JSON.stringify(response.data))
            navigate("/home")
        }
        setUserData(initialState);
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Create Account</h1>
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
                <span>or use your email for registration</span> */}
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
