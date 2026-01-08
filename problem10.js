// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself

function PingPong() {
    for (let i = 1; i <= 20; i++){

        if (i % 15 === 0) console.log("PingPong");
        else if (i % 3 === 0) console.log("ping");
        else if (i % 5 === 0) console.log("pong");
        else console.log(i);
    }
}
PingPong()