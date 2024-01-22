import { useState } from "react";

export const Register= () => {

    const [user,setUser] = (useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    }));

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(e);

        setUser({
            ...user,
            [name] : value,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(user);
    }

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        {/* registration image  */}
                        <div className="registration-image">
                            <img src="/images/registration.png" alt="image" 
                             height="560"
                             width="600"
                            /> 
                        </div>

                        {/* registration form  */}

                         <div className="registration-form">
                            <h1 className="main-headng mb-3">Registration Form</h1>

                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username" className="input-label">username:</label>
                                    <input
                                     type="text"
                                     name="username"
                                     id="username" 
                                     placeholder="username"
                                     required
                                     value={user.username}
                                     onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="input-label">email:</label>
                                    <input
                                     type="email"
                                     name="email"
                                     id="email"
                                     placeholder="@gmail.com"
                                     required
                                     autoComplete="off"
                                     value={user.email}
                                     onChange={handleInput}
                                     />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="input-label">phone:</label>
                                    <input
                                     type= "number"
                                     name="phone"
                                     id="phone"
                                     placeholder="987654321"
                                     required
                                     autoComplete="off"
                                     value={user.phone}
                                     onChange={handleInput}
                                     />
                                </div>
                                <div>
                                    <label htmlFor="password" className="input-label">password:</label>
                                    <input
                                     type= "password"
                                     name="password"
                                     id="password"
                                     placeholder=".."
                                     required
                                     autoComplete="off"
                                     value={user.password}
                                     onChange={handleInput}
                                     />
                                </div> 
                                <button className="btn button-submit">Submit</button>

                            </form>
                         </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}