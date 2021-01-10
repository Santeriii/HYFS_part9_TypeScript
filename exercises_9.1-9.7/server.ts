import express from 'express';
import { calculateBmi } from './bmiCalculator'
const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
})

app.get('/bmi', (req, res) => {
    let height = req.query.height
    let weight = req.query.weight

    try {
        if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
            res.send({
                weight: weight,
                height: height,
                bmi: calculateBmi(Number(height), Number(weight))
            });
        } else {
            throw new Error('Provided values were not numbers!');
        }
    } catch (e) {
        res.send({
            error: "malformatted parameters"
        });
    }
})

app.get('/user:id', function (request, response) {
    response.send('user ' + request.params.id)
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});