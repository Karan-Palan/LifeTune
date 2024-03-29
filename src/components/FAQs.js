import React from 'react';

const FAQs = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', background: 'linear-gradient(to bottom, #000000, #000000)', backgroundColor: '#111111', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
            <h2 style={{ color: 'white' }}>Frequently Asked Questions</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '40px', marginTop: '15px', textAlign: 'left' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'white' }}>1. What is BMI?</h3>
                    <p style={{ color: 'white' }}>BMI stands for Body Mass Index. It is a measure of body fat based on height and weight that applies to adult men and women.</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'white' }}>2. What is the difference between moderate and vigorous exercise?</h3>
                    <p style={{ color: 'white' }}>Moderate exercise refers to activities like brisk walking or swimming, while vigorous exercise includes activities like running or playing sports that significantly increase heart rate and breathing.</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'white' }}>3. What is a normal cholesterol level?</h3>
                    <p style={{ color: 'white' }}>A normal cholesterol level typically falls below 200 milligrams per deciliter (mg/dL) of blood.</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'white' }}>4. What is normal blood pressure and what is considered low and high?</h3>
                    <p style={{ color: 'white' }}>Normal blood pressure is typically around 120/80 mmHg. Blood pressure below 90/60 mmHg is considered low, while blood pressure above 140/90 mmHg is considered high.</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'white' }}>5. What is red food consumption?</h3>
                    <p style={{ color: 'white' }}>Red food consumption refers to the intake of foods high in saturated fats, cholesterol, and calories, which can contribute to heart disease and other health problems.</p>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
