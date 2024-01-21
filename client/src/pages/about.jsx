export const About = () => {
    return <>
    <section className="section-about">
        <div className="grid grid-two-cols">
            <div className="about-content">
                <p>Welcome Username</p>
                <h1>Why Choose us?</h1>
                <br />
                <p>
                    Expertize: Our team is  composed of the experienced it professionals who are passionate 
                    
                    and stay up-to-date to the latest indusries trends.
                </p><br /><br />
                <p>
                    Realiability: We are commited to ensure that your IT environment is realiable and available 24/7 
                </p><br /><br />
                <p>
                    Affordability: We provide best content in much affordable price.
                </p><br /><br />

                <p>
                    Customer-Centric-Approach: For us coustomer comes first. Our goal is to build solution based on coustomwer needs.
                </p><br /><br /> 

                <div className="btn btn-group">
                        <a href="/contact"><button className="btn">Contant Now</button></a>
                        <a href="/services"><button className="btn button-2">Learn More</button></a>
                </div>
            </div>
            <div className="about-image">
                <img src="images/laptop.png" alt=""  />
            </div>
        </div>
    </section>

    <section className="section-activity">
            <div className="grid grid-four-cols">
                <div className="activity-box">
                    <h2>100+</h2>
                    <p>registered clients</p>
                </div>
                <div className="activity-box">
                    <h2>1000+</h2>
                    <p>contents in hour</p>
                </div>
                <div className="activity-box">
                    <h2>50+</h2>
                    <p>Courses</p>
                </div>
                <div className="activity-box">
                    <h2>24/7</h2>
                    <p>services</p>
                </div>
            </div>
        </section>
    </>;
};