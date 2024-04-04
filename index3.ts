let n1: number = 42;
let strVariable: string = "Hello, TypeScript!";
let boolVariable: boolean = true;
let undefinedVariable: undefined = undefined;

const n2: number = 10;

// Addition
const sum: number = n1 + n2;
console.log("Sum:", sum);

const concatenatedString: string = strVariable + " How are you?";
console.log("Concatenated String:", concatenatedString);

const isTrue: boolean = boolVariable && true;
console.log("Logical AND:", isTrue);

if (undefinedVariable === undefined) {
    console.log("undefinedVariable is undefined.");
} else {
    console.log("undefinedVariable is defined.");
}