var student1 = {
    id: 1,
    studentname: "ginny_millaray",
    email: "ginny@example.com",
};
var student2 = {
    id: 2,
    studentname: "endika_keeva",
    email: "endika@example.com",
};
var originPoint = {
    x: 0,
    y: 0,
};
function printStudentInfo(student) {
    console.log("Student ID: ".concat(student.id));
    console.log("Studentname: ".concat(student.studentname));
    console.log("Email: ".concat(student.email));
}
function calculateDistance(point1, point2) {
    var dx = point1.x - point2.x;
    var dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
console.log("Student 1:");
printStudentInfo(student1);
console.log("\nStudent 2:");
printStudentInfo(student2);
console.log("\nDistance from origin:");
console.log(calculateDistance(originPoint, { x: 3, y: 4 }));
