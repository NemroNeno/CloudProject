import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const joinHandler = () => {
        navigate("/login");
    };

    const signinHandler = () => {
        navigate("/register");
    }

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="assetImages/about.jpg" className="d-block mx-lg-auto img-fluid" alt="About Us" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">About Us</h1>
                    <p className="lead">
                        Our Video Gallery App is a cloud-native, microservices-driven platform developed as part of our Cloud Engineering 
                        semester project. Built on the MERN stack, it offers users a seamless experience to upload, browse, and manage short 
                        videos. With a focus on scalability, efficiency, and modern software design principles, our app demonstrates the power 
                        of cloud-based microservices architecture.
                    </p>
                    {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={joinHandler}>Sign In</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={signinHandler}>Join Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;
