type Operation = 'multiply' | 'divide' | 'add';

type Result = number;

const calculator = (a: number, b: number, op : Operation): Result => {
    switch(op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error ('Can\'t divide by 0!');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operation is not multiply, add or divide!');
    }
}

console.log('Choose an operation: "multiply", "add" or "divide":')
var args = process.argv.slice(2)
console.log(args)

try {
    console.log(calculator(5, 4, 'divide'))
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}