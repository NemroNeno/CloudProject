import React from 'react';
import styles from './About.module.css'; // Import the CSS module
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

        <>

            <div className={styles.wrapper}>
            <h1
                style={{
                    margin: '.5rem 2rem',
                    padding: '.5rem 2rem',
                    color: 'white',
                    // fontSize: '4rem
                }}
            >About Us</h1>
            <div className={styles['about-section']}>
                <div className={styles['about-content']}>
                    <p>
                    Our Video Gallery App is a cloud-native, microservices-driven platform developed as part of our Cloud Engineering 
                    semester project. Built on the MERN stack, it offers users a seamless experience to upload, browse, and manage short 
                    videos. With a focus on scalability, efficiency, and modern software design principles, our app demonstrates the power 
                    of cloud-based microservices architecture.
                    </p>
                    <div className={styles['buttons']}>
                        <button className={styles['btn']} onClick={joinHandler}>Sign In</button>
                        <button className={styles['btn']} onClick={signinHandler}>Join Now</button>
                    </div>
                </div>
                <div className={styles['about-image']}>
                    <img src="assetImages/about.jpg" alt="About Us" style={{
                    }} />
                </div>
            </div>

            </div>
        </>
    );
};

export default About;
