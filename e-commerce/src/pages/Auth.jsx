import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [mode, setMode] = useState("Sign Up");

    const { signUp, user, logout, login } = useContext(AuthContext);

    const onSubmit = (data) => {

        setError(null);

        console.log("Form Data:", data);

        let result;
        if (mode === "Sign Up") {
            result = signUp(data.email, data.password);
        } else {
            result = login(data.email, data.password);
        }

        if (!result.success) {
            setError(result);
        } else {
            setError(null);

            if (mode === "Sign Up") {
                alert(`Account created with email: ${data.email}`);
            } else {
                alert(`Logged in with email: ${data.email}`);
            }
            navigate("/");
        }

        reset();
    }

    const handleModeChange = (newMode) => {
        setMode(newMode);
        reset();
    }
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    {user && <p>User Logged in with email : {user.email}</p>}
                    <h1 className="page-title">{mode === "Sign Up" ? "Sign Up" : "Login"}</h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>

                        {error && <div className="error-message">{error.message}</div>}

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-input" type="email" id="email" {...register("email", { required: "Email is required" })} />

                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-input" type="password" id="password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password should atleast be of length 8" }, maxLength: { value: 12, message: "Password can't be greater then 12 character" } })} />
                        </div>

                        <button type="submit" className="btn btn-primary">{mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                        {user && <button type="button" className="btn btn-primary" style={{ margin: "5px", backgroundColor: "crimson" }} onClick={logout}>Logout</button>}

                    </form>

                    {
                        mode === "Sign Up" ?
                            <p className="auth-switch">
                                Already have an account? <span className="auth-link" onClick={() => handleModeChange("Login")}>Login</span>
                            </p>
                            :
                            <p className="auth-switch">
                                Don't have an account? <span className="auth-link" onClick={() => handleModeChange("Sign Up")}>Sign Up</span>
                            </p>
                    }
                </div>
            </div>
        </div>
    )

}