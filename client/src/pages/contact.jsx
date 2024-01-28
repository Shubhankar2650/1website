import { useState } from "react";
const URL = "";

export const Contact = () => {
    const [contact, setContact] = (useState({
        username: "",
        email: "",
        message: "",
    }));

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(contact);
    }

    return <>
        <section className="section-contact">
            <div className="heading">
                <h1 className="mb-3">Contact Us</h1>
            </div>
            <div className="container grid grid-two-cols">

                <div className="login-image">
                    <img src="images/registration.png" alt="" height="500" width="500" />
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
                                value={contact.username}
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
                                value={contact.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="input-label">Message:</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="43"
                                rows="10"
                                autoComplete="off"
                                required
                                value={contact.message}
                                onChange={handleInput}
                            ></textarea>
                        </div>
                        <button className="btn button-submit">Submit</button>
                    </form>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.2060887854072!2d76.57279697622107!3d30.768794783887813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1705965635172!5m2!1sen!2sin" 
             width="100%"
             height="450" 
            //  style="border:0;" 
             allowfullscreen 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </section>
    </>;
}