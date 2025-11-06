// 5-to_integer.js

const arg = process.argv[2]; // Get the first argument
const num = parseInt(arg);  // Convert it to integer

// Check if num is a valid number
if (!isNaN(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}
