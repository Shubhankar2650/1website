export const Home = () => {
    return <>
    <main>
        <section className="section-home">
            <div className="grid grid-two-cols">
                <div className="home-content">
                    <p>We are no. 1</p>
                    <h1>Welcome to the SK tutorails</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur inventore
                         quidem qui cumque. Impedit cum nesciunt aspernatur corporis. Necessitatibus, corporis 
                         labore? Quis fugiat ducimus sint sapiente quod fuga, cumque ad ex iste cum! Labore laudantium
                        saepe dicta recusandae eligendi facilis unde deleniti. Molestiae illum quisquam culpa nihil eos voluptate.
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact"><button className="btn">Contant Now</button></a>
                        <a href="/services"><button className="btn button-2">Learn More</button></a>
                    </div>
                </div>
                <div className="home-image">
                    <img src="/images/laptop.png" alt="welcome" srcset="" />
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
        <section className="section-home">
            
            <div className="grid grid-two-cols">
                <div className="home-image">
                    <img src="/images/laptop.png" alt="welcome" srcset="" />
                </div>
                <div className="home-content">
                    <p>Let's Get Started</p>
                    <h1>Begin you journey with SK tutorails</h1>
                    <p>
                        Be Ready to transform your future by learing cutting edge technologies with us. We are providing
                        different courses in differet fields with many happy clients.So, what are you waiting for.
                        Start your learing journey now!!
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact"><button className="btn">Contant Now</button></a>
                        <a href="/services"><button className="btn">Learn More</button></a>
                    </div>
                </div>
                
            </div>
        </section>
    </main>

    </>;
};