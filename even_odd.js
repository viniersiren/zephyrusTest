const read = require('readline');

const r = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

function oddEven(n) {
    if(n%2 === 0) {console.log("Even")}
    else{console.log("Odd")}
}
r.question('Enter an integer: ', (input)=> {
    const toInt = parseInt(input, 10); //Convert to an integer
    if(isNaN(toInt)) {
        console.log('Enter a valid integer. ')
    }
    else {
        oddEven(toInt);
    }
    r.close();

});
