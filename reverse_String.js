const read = require('readline');

const r = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(input) {
    return input.split('').reverse().join('');
}

function inputEdgeCase(input) {
    if(/\d/.test(input)) { //regex to test for integer input
        r.question('Your input contains integers. Do you want to continue? (y/n): ', (answer) => {
            if(answer.toLowerCase() === 'y') {
                const reversed = reverseString(input);
                console.log(`Reversed input is: ${reversed}`);
                    r.close();
                
            } 
            else if(answer.toLowerCase() === 'n') {
                promptForInput();
            } 
            else {
                console.log('Invalid Response, type y or n');
                handleInput(input);
            }
        });
    }
    else {
        const reversed = reverseString(input);
        console.log(`Reversed input is: ${reversed}`);
        r.close();
    }
}

function promptForInput() {
    r.question(`Enter a string: `, (input) => {
        inputEdgeCase(input);
    })
}
promptForInput();
//Edge Cases: check for only integers, integers in string, display warning,
    //y to continue n to restart
//Check for more efficient solutions


/*r.question('Enter a string to be reversed: ', (input)=> { ** deprecated
    const output = reverseString(input);
    console.log(`You entered: ${output}`);
    r.close();

})*/