import React from 'react';
import logo from '../logo.png';

const Header = () => {
    return (
        <div style={styles.container}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="LifeTune Logo" style={styles.logo} />
                <h2 style={styles.heading}></h2>
            </div>
            <div style={styles.linksContainer}>
                <a href="/social" style={styles.link}>Social</a>
                <a href="/about" style={styles.link}>About Us</a>
                <a href="/faqs" style={styles.link}>FAQs</a>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '10px 20px',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '300px',
        height: '100px',
        marginRight: '10px',
    },
    heading: {
        margin: '0',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
    },
    linksContainer: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        marginLeft: '20px',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif',
        transition: 'color 0.3s ease',
    },
    linkHover: {
        color: '#FFD700', // Change the color for hover effect
    }
};

export default Header;
