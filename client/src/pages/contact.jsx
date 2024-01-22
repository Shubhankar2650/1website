import { useState } from "react";

export const Contact = () => {
    const [user,setUser] = (useState({
        username: "",
        email: "",
        message: "",
    }));

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name] : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(user);
    }

    return <>
    <section className="section-contact">
        <h1 className="mb-3">Contact Us</h1>
        <div className="container grid grid-two-cols">
            
            <div className="login-image">
                <img src="images/registration.png" alt="" height="500" width="500"/>
            </div>

            <div className="login-details">
                

                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="input-label">Username:</label>
                        <input
                         type="username"
                         name="username"
                         id="username"
                         autoComplete="off"
                         required
                         value={user.username}
                         onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="input-label">Email:</label>
                        <input
                         type="email"
                         name="email"
                         id="email"
                         autoComplete="off"
                         required
                         value={user.email}
                         onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="input-label">Message:</label>
                        <input
                         type="text"
                         name="message"
                         id="message"
                         autoComplete="off"
                         required
                         value={user.message}
                         onChange={handleInput}
                        />
                    </div>
                    <button className="btn button-submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    </>;
}