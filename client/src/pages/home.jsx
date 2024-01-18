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
                        <a href="/services"><button className="btn">Learn More</button></a>
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
                    <span>A</span>
                </div>
                <div className="activity-box">
                    <span>B</span>
                </div>
                <div className="activity-box">
                    <span>C</span>
                </div>
                <div className="activity-box">
                    <span>D</span>
                </div>
            </div>
        </section>
    </main>
    </>;
};