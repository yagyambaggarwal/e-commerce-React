import { createContext, useState } from "react"
export const AuthContext = createContext(null);

export default function AuthProvider({ children }){
    const [user, setUser] = useState(null);

    function signUp(email, password){
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if(users.find((u) => u.email === email)){
            return {success : false, message : "User already exists."}
        }

        const newuser = {email, password};   
        
        users.push(newuser);

        localStorage.setItem("users", JSON.stringify(users));

        setUser({email});
        return {success : true, message : "User signed in"}
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            setUser({ email });
            return { success: true, message: "Successfully logged in." };
        } else {
            return { success: false, message: "Invalid email or password." };
        }
    }

    function logout(){
        setUser(null);
    }

    return <AuthContext.Provider value={{ signUp, user, logout, login }}>{children}</AuthContext.Provider>
}