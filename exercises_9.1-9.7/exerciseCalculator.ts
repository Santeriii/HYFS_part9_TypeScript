interface Results {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const parseArgumentsExercise = (args: Array<string>) =>{
    if (args.length < 5) throw new Error('Not enough arguments');

    for (let i = 2; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            throw new Error('Provided values were not numbers!')
        }
    }

    args.shift();
    args.shift();


    return args
}

const calculateExercises = (trainingList: any[], tgt: number): Results => {
    let trainingDayCount = 0
    const sum = trainingList.reduce((a, b) => a + b, 0);
    const avg = sum / trainingList.length
    let suc
    let desc
    let rate

    if (avg * 2 < tgt) {
        desc = 'There is a lot room for improvement'
        rate = 1
    } else if (avg * 2 >= tgt && avg < tgt) {
        desc = 'Getting close, but you can still do better'
        rate = 2
    } else if (avg >= tgt) {
        desc = 'Nice work!'
        rate = 3
    }

    if (avg >= tgt) {
        suc = true
    } else {
        suc = false
    }

    for (let value of trainingList) {
        if (value > 0) {
            trainingDayCount++;
        }
    }

    return {
        periodLength: trainingList.length,
        trainingDays: trainingDayCount,
        success: suc,
        rating: rate,
        ratingDescription: desc,
        target: tgt,
        average: avg
    }
}

try {
    const input = parseArgumentsExercise(process.argv)
    const targ = 2
    console.log(calculateExercises(input, targ))
} catch (e) {
    console.log('Something went wrong, here is the error message: ', e.message);
}