type Result = string;

interface heightAndWeight {
    height: number;
    weight: number;
}

type BMI = number;

const parseArguments = (args: Array<string>): heightAndWeight => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments')

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const calculateBmi = (height: number, weight: number) => {
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
    const { height, weight } = parseArguments(process.argv);
    console.log(calculateBmi(height, weight))
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}