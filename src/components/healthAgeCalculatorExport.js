export const calculateHealthAge = (userData) => {
    const {
        age,
        BMI,
        moderateExercise,
        vigorousExercise,
        sleep,
        cholesterol,
        bloodPressure,
        smoking,
        bloodGlucose,
        socialConnection,
        stress,
        redFoods,
        strengthTraining,
    } = userData;

    let healthAge = age;

    healthAge += BMICalculation(BMI, age);
    healthAge += aerobicExerciseCalculation(moderateExercise, vigorousExercise, age);
    healthAge += sleepCalculator(sleep, age);
    healthAge += cholesterolCalculation(cholesterol, age);
    healthAge += bloodPressureCalculation(bloodPressure, age);
    healthAge += smokingCalculation(smoking, age);
    healthAge += bloodGlucoseCalculation(bloodGlucose, age);
    healthAge += socialConnectionCalculation(socialConnection, age);
    healthAge += stressCalculation(stress, age);
    healthAge += redFoodCalculation(redFoods, age);
    healthAge += strengthTrainingCalculation(strengthTraining, age);

    return healthAge;
};

export const BMICalculation = (BMI, age) => {
    let scale = 0;

    if (BMI === "Too Thin") {
        scale = age * 0.02;
    } else if (BMI === "Healthy") {
        scale = -age * 0.05;
    } else if (BMI === "Overweight") {
        scale = -age * 0.01;
    } else if (BMI === "Moderately Overweight") {
        scale = age * 0.05;
    } else if (BMI === "Severely Overweight") {
        scale = age * 0.08;
    } else if (BMI === "Morbidly Obese") {
        scale = age * 0.1;
    }

    return scale;
};


export const aerobicExerciseCalculation = (moderateExercise, vigorousExercise, age) => {
    let scale = 0;
    const totalExercise = parseFloat(moderateExercise) + parseFloat(vigorousExercise) * 2;

    if (totalExercise <= 10) {
        scale = age * 0.06;
    } else if (totalExercise <= 30) {
        scale = age * 0.02;
    } else if (totalExercise <= 45) {
        scale = age * -0.03;
    } else if (totalExercise > 45) {
        scale = age * -0.06;
    }

    return scale;
};


export const strengthTrainingCalculation = (strengthTraining, age) => {
    let scale = 0;

    if (strengthTraining === "0-29 minutes") {
        scale = age * 0.04;
    } else if (strengthTraining === "30-59 minutes") {
        scale = age * 0.01;
    } else if (strengthTraining === "60-119 minutes") {
        scale = age * -0.02;
    } else if (strengthTraining === "120 > minutes") {
        scale = age * -0.04;
    }

    return scale;
};


export const redFoodCalculation = (redFoods, age) => {
    let scale = 0;

    switch (redFoods) {
        case "7 or less/week":
            scale = age * 0.03;
            break;
        case "7.1 - 13.9/week":
            scale = age * 0.01;
            break;
        case "14 - 20.9/week":
            scale = age * -0.01;
            break;
        case "21 - 27.9/week":
            scale = age * -0.03;
            break;
        case "> 28/week":
            scale = age * -0.05;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};


export const sleepCalculator = (sleep, age) => {
    let scale = 0;

    switch (sleep) {
        case "7-9/Day":
            scale = age * -0.03;
            break;
        case "< 7/Day":
            scale = age * 0.03;
            break;
        case "> 9/Day":
            scale = age * 0.05;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};


export const cholesterolCalculation = (cholesterol, age) => {
    let scale = 0;

    switch (cholesterol) {
        case "Great":
            scale = age * -0.05;
            break;
        case "Good":
            scale = age * -0.02;
            break;
        case "High":
            scale = age * 0.02;
            break;
        case "Really High":
            scale = age * 0.05;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};


export const bloodPressureCalculation = (bloodPressure, age) => {
    let scale = 0;

    switch (bloodPressure) {
        case "Great":
            scale = age * -0.05;
            break;
        case "Borderline":
            scale = age * -0.02;
            break;
        case "High":
            scale = age * 0.02;
            break;
        case "Moderately High":
            scale = age * 0.05;
            break;
        case "Severely Elevated":
            scale = age * 0.08;
            break;
        case "I don't know":
            scale = age * 0.05;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};

export const smokingCalculation = (smoking, age) => {
    let scale = 0;

    switch (smoking) {
        case "Yes":
            scale = age * 0.1;
            break;
        case "No":
            scale = age * -0.1;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};


export const bloodGlucoseCalculation = (bloodGlucose, age) => {
    let scale = 0;

    switch (bloodGlucose) {
        case "Normal":
            scale = age * -0.05;
            break;
        case "Pre-Diabetes":
            scale = age * 0.02;
            break;
        case "Diabetes, controlled":
            scale = age * 0.05;
            break;
        case "Diabetes":
            scale = age * 0.08;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};


export const socialConnectionCalculation = (socialConnection, age) => {
    let scale = 0;

    switch (socialConnection) {
        case "Rarely":
            scale = age * -0.05;
            break;
        case "Sometimes":
            scale = age * 0.02;
            break;
        case "Often":
            scale = age * 0.05;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};


export const stressCalculation = (stress, age) => {
    let scale = 0;

    switch (stress) {
        case "A little":
            scale = age * -0.03;
            break;
        case "Some":
            scale = age * 0.02;
            break;
        case "A lot":
            scale = age * 0.05;
            break;
        default:
            scale = 0;
            break;
    }

    return scale;
};
