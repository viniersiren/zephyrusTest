function fizzBuzz() {
    for(let i = 1; i <= 100; i++ ) { //loop 1 to 100
        let output = ""; //reduce an if statement by appending to output
        if(i % 3 === 0) {output += 'Fizz';}
        if(i % 5 === 0) {output += 'Buzz';}
        console.log(output || i)
    }
}

fizzBuzz();