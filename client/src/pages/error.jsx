import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
    return <>
        <section className="section-error">
        <div className="content">
                <h1>    404</h1>
                <h4>Error! Page Not Found</h4>
                <p>
                    OOPS! The page you are trying to visit is doesnot exists.<br />
                    Contact us if there's an Error.
                </p>
                <div className="btns">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact us</NavLink>
                </div>
            </div>
        </section>
    </>;
}