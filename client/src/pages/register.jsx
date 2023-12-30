
export const Register= () => {
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
                         <div className="registration-from">
                            <h1>Registration Form</h1>

                            <form action="">
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input
                                     type="text"
                                     name="username"
                                     id="username" 
                                     placeholder="username"
                                     required
                                     autoComplete="off"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                     type="email"
                                     name="email"
                                     id="email"
                                     placeholder="@gmail.com"
                                     required
                                     autoComplete="off"
                                     />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input
                                     type= "number"
                                     name="phone"
                                     id="phone"
                                     placeholder="987654321"
                                     required
                                     autoComplete="off"
                                     />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input
                                     type= "password"
                                     name="password"
                                     id="password"
                                     placeholder=".."
                                     required
                                     autoComplete="off"
                                     />
                                </div>

                            </form>
                         </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}