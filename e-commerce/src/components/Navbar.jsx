import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Navbar(){
    const {user, logout} = useContext(AuthContext);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={"/"} className="navbar-brand">
                    ShopHub    
                </Link>

                <div className="navbar-links">
                    <Link to={"/"} className="navbar-link">Home</Link>
                    <Link to={"/checkout"} className="navbar-link">Cart</Link>
                </div>

                {!user ? 
                    (<div className="navbar-auth">
                        <div className="navbar-auth-links">
                            <Link to={"/auth"} className="btn btn-secondary">SignUp</Link>
                            <Link to={"/auth"} className="btn btn-primary">Login</Link>
                        </div>
                    </div>) 
                    :
                    (<div className="navbar-auth">
                        <div className="navbar-auth-links">
                            <button className="btn btn-primary" style={{ backgroundColor: "grey" }} onClick={logout}>Logout</button>
                        </div>
                    </div>)
                }
            </div>
        </nav>
    )
} 