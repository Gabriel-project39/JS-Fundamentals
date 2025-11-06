// 3-value_argument.js

const arg = process.argv[2]; // First user-provided argument

if (arg === undefined) {
    console.log("No argument");
} else {
    console.log(arg);
}
