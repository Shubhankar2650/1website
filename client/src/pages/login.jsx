import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/login/";

export const Login = () => {

    const [user, setUser] = (useState({
        email: "",
        password: "",
    }));

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL,{
            method: "POST",    
            headers: {
                    "Content-Type":"application/json",
                },
            body: JSON.stringify(user),
            });
            if(response.ok){
                setUser({email: "",
                password: ""});
                Navigate("/");
                alert("registeration sussessful");
            }else{
                alert("Invalid email or password");
            }
        } catch (error) {
            console.log("login",error);
        }
    }

    return <>
        <section className="section-login">
            <div className="container grid grid-two-cols">
                <div className="login-image">
                    <img src="images/registration.png" alt="" height="500" width="500" />
                </div>

                <div className="login-details">
                    <div className="heading">
                        <h1 className="mb-3">Login Form</h1>
                    </div>

                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="input-label">Email:</label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="off"
                                required
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="input-label">Password:</label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                required
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <button className="btn ">Login</button>
                    </form>
                </div>
            </div>
        </section>
    </>;
}