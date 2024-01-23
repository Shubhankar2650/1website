import { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(user);
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