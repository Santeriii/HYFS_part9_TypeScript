type Result = string;

type BMI = number;

const calculateBmi = (height: number, weight: number) : Result => {
    height = height / 100;
    const bmi = weight / (height * height);
    console.log(bmi)
    if (bmi < 18.5) {
        return 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal (healthy weight)'
    } else if (bmi > 24.9) {
        return 'Overweight'
    }
}

try {
    console.log(calculateBmi(180, 74))
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}