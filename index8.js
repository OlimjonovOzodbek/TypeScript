var colors = ["Red", "Green", "Blue", "Orange"];
colors.push("White");
colors.push("Pink");
colors.pop();
console.log("Array Elements:");
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var c = colors_1[_i];
    console.log(c);
}
var searchColor = "Green";
var isColorInArray = colors.includes(searchColor);
console.log("Is ".concat(searchColor, " in the array? ").concat(isColorInArray ? "Yes" : "No"));
var indexOfBlue = colors.indexOf("Blue");
console.log("Index of \"Blue\" in the array: ".concat(indexOfBlue));
if (indexOfBlue !== -1) {
    colors.splice(indexOfBlue, 1);
}
console.log("Modified Array:");
console.log(colors);
