const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countFactors(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
}

function getUserInput() {
    rl.question('Enter a number (or "q" to quit): ', (input) => {
        if (input.toLowerCase() === 'q') {
            rl.close();
            return;
        }
        const number = parseInt(input);
        if (!isNaN(number)) {
            const factorCount = countFactors(number);
            console.log(`Number of factors for ${number}: ${factorCount}`);
        } else {
            console.log('Invalid input. Please enter a number or "q" to quit.');
        }
        getUserInput(); // recursively call to prompt for next input
    });
}

// Start the program
console.log('Welcome! This program counts factors of a number.');
getUserInput();
