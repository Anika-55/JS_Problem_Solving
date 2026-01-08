// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:
// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(str) {
    return str
        .trim()                 

        .split(" ")             

        .map(word => 
            word[0].toUpperCase() + word.slice(1)
        )

        .join(" ");
}

console.log(capitalizeWords("hello world "));
