const colors: string[] = ["Red", "Green", "Blue", "Orange"];
colors.push("White");
colors.push("Pink");
colors.pop(); 
console.log("Array Elements:");
for (const c of colors) {
  console.log(c);
}
const searchColor = "Green";
const isColorInArray = colors.includes(searchColor);
console.log(`Is ${searchColor} in the array? ${isColorInArray ? "Yes" : "No"}`);
const indexOfBlue = colors.indexOf("Blue");
console.log(`Index of "Blue" in the array: ${indexOfBlue}`);
if (indexOfBlue !== -1) {
  colors.splice(indexOfBlue, 1);
}
console.log("Modified Array:");
console.log(colors);