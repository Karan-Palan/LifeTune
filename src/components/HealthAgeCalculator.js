import React, { useState } from 'react';
import { calculateHealthAge, BMICalculation, aerobicExerciseCalculation, strengthTrainingCalculation, redFoodCalculation, sleepCalculator, cholesterolCalculation, bloodPressureCalculation, smokingCalculation, bloodGlucoseCalculation, socialConnectionCalculation, stressCalculation } from './healthAgeCalculatorExport';

const HealthAgeCalculator = () => {
    const [age, setAge] = useState('');
    const [BMI, setBMI] = useState('');
    const [moderateExercise, setModerateExercise] = useState('');
    const [vigorousExercise, setVigorousExercise] = useState('');
    const [sleep, setSleep] = useState('');
    const [cholesterol, setCholesterol] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [smoking, setSmoking] = useState('');
    const [bloodGlucose, setBloodGlucose] = useState('');
    const [socialConnection, setSocialConnection] = useState('');
    const [stress, setStress] = useState('');
    const [redFoods, setRedFoods] = useState('');
    const [strengthTraining, setStrengthTraining] = useState('');
    const [healthAge, setHealthAge] = useState(null);

    const handleCalculate = () => {
        const userData = {
            age: parseFloat(age),
            BMI,
            moderateExercise: parseFloat(moderateExercise),
            vigorousExercise: parseFloat(vigorousExercise),
            sleep,
            cholesterol,
            bloodPressure,
            smoking,
            bloodGlucose,
            socialConnection,
            stress,
            redFoods,
            strengthTraining
        };

        const calculatedHealthAge = calculateHealthAge(userData);
        setHealthAge(calculatedHealthAge);
    };

    return (
        <div>
            <h2>LifeTune</h2>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="bmi">BMI:</label>
                <select id="bmi" value={BMI} onChange={(e) => setBMI(e.target.value)}>
                    <option value="">Select BMI</option>
                    <option value="Too Thin">Too Thin</option>
                    <option value="Healthy">Healthy</option>
                    <option value="Overweight">Overweight</option>
                    <option value="Moderately Overweight">Moderately Overweight</option>
                    <option value="Severely Overweight">Severely Overweight</option>
                    <option value="Morbidly Obese">Morbidly Obese</option>
                </select>
            </div>
            <div>
                <label htmlFor="moderateExercise">Moderate Exercise (minutes/week):</label>
                <input
                    type="number"
                    id="moderateExercise"
                    value={moderateExercise}
                    onChange={(e) => setModerateExercise(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="vigorousExercise">Vigorous Exercise (minutes/week):</label>
                <input
                    type="number"
                    id="vigorousExercise"
                    value={vigorousExercise}
                    onChange={(e) => setVigorousExercise(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="sleep">Sleep Duration:</label>
                <select id="sleep" value={sleep} onChange={(e) => setSleep(e.target.value)}>
                    <option value="">Select Sleep Duration</option>
                    <option value="7-9/Day">7-9 hours/day</option>
                    <option value="< 7/Day">Less than 7 hours/day</option>
                    <option value="> 9/Day">More than 9 hours/day</option>
                </select>
            </div>
            <div>
                <label htmlFor="cholesterol">Cholesterol Level:</label>
                <select id="cholesterol" value={cholesterol} onChange={(e) => setCholesterol(e.target.value)}>
                    <option value="">Select Cholesterol Level</option>
                    <option value="Great">Great</option>
                    <option value="Good">Good</option>
                    <option value="High">High</option>
                    <option value="Really High">Really High</option>
                    <option value="I don't know">I don't know</option>
                </select>
            </div>
            <div>
                <label htmlFor="bloodPressure">Blood Pressure:</label>
                <select id="bloodPressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)}>
                    <option value="">Select Blood Pressure</option>
                    <option value="Great">Great</option>
                    <option value="Borderline">Borderline</option>
                    <option value="High">High</option>
                    <option value="Moderately High">Moderately High</option>
                    <option value="Severely Elevated">Severely Elevated</option>
                    <option value="I don't know">I don't know</option>
                </select>
            </div>
            <div>
                <label htmlFor="smoking">Smoking:</label>
                <select id="smoking" value={smoking} onChange={(e) => setSmoking(e.target.value)}>
                    <option value="">Select Smoking Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="bloodGlucose">Blood Glucose Level:</label>
                <select id="bloodGlucose" value={bloodGlucose} onChange={(e) => setBloodGlucose(e.target.value)}>
                    <option value="">Select Blood Glucose Level</option>
                    <option value="Normal">Normal</option>
                    <option value="Pre-Diabetes">Pre-Diabetes</option>
                    <option value="Diabetes, controlled">Diabetes, controlled</option>
                    <option value="Diabetes">Diabetes</option>
                </select>
            </div>
            <div>
                <label htmlFor="socialConnection">Social Connection:</label>
                <select id="socialConnection" value={socialConnection} onChange={(e) => setSocialConnection(e.target.value)}>
                    <option value="">Select Social Connection</option>
                    <option value="Rarely">Rarely</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="Often">Often</option>
                </select>
            </div>
            <div>
                <label htmlFor="stress">Stress Level:</label>
                <select id="stress" value={stress} onChange={(e) => setStress(e.target.value)}>
                    <option value="">Select Stress Level</option>
                    <option value="A little">A little</option>
                    <option value="Some">Some</option>
                    <option value="A lot">A lot</option>
                </select>
            </div>
            <div>
                <label htmlFor="redFoods">Red Food Consumption (per week):</label>
                <select id="redFoods" value={redFoods} onChange={(e) => setRedFoods(e.target.value)}>
                    <option value="">Select Red Food Consumption</option>
                    <option value="7 or less/week">7 or less/week</option>
                    <option value="7.1 - 13.9/week">7.1 - 13.9/week</option>
                    <option value="14 - 20.9/week">14 - 20.9/week</option>
                    <option value="21 - 27.9/week">21 - 27.9/week</option>
                    <option value="> 28/week">More than 28/week</option>
                </select>
            </div>
            <div>
                <label htmlFor="strengthTraining">Strength Training (minutes/week):</label>
                <select id="strengthTraining" value={strengthTraining} onChange={(e) => setStrengthTraining(e.target.value)}>
                    <option value="">Select Strength Training Duration</option>
                    <option value="0-29 minutes">0-29 minutes</option>
                    <option value="30-59 minutes">30-59 minutes</option>
                    <option value="60-119 minutes">60-119 minutes</option>
                    <option value="120 > minutes">120 minutes or more</option>
                </select>
            </div>
            <button onClick={handleCalculate}>Calculate Health Age</button>
            {healthAge !== null && <p>Your Health Age: {healthAge}</p>}
        </div>)
}

export default HealthAgeCalculator;