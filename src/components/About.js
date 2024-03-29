import React from 'react';
import aboutImage from '../About.png';

const About = () => {
    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={aboutImage} alt="About" style={styles.image} />
            </div>
            <div style={styles.textContainer}>
                <h2 style={styles.heading}>About Us</h2>
                <p style={styles.text}>
                    We are passionate about promoting healthy living and empowering individuals to take control of their well-being. Our mission is to provide innovative solutions that inspire people to live healthier lives.
                </p>
                <p style={styles.text}>
                    Our latest creation is the Body Health Calculator, a virtual health indicator designed to prompt regular health checkups and motivate users to maintain or improve their health. By calculating a personalized health score based on lifestyle choices and self-reported health data, our tool encourages users to monitor their health and make informed decisions for a healthier future.
                </p>
                <p style={styles.text}>
                    Join us on this journey towards better health and well-being!
                </p>
            </div>

        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111111',
        padding: '50px',
        color: '#fff',
    },
    imageContainer: {
        marginBottom: '30px',
    },
    image: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '10px',
    },
    textContainer: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    heading: {
        fontSize: '32px',
        marginBottom: '20px',
    },
    text: {
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    solutionContainer: {
        textAlign: 'center',
    },
    solutionHeading: {
        fontSize: '28px',
        marginBottom: '20px',
    },
};

export default About;
