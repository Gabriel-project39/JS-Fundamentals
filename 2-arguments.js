const argsCount = process.argv.length - 2;

if (argsCount === 0) {
    console.log("0 argument");
} else if (argsCount === 1) {
    console.log("1 argument");
} else {
    console.log(`${argsCount} arguments`);
}
