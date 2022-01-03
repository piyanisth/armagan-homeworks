let currentDate = new Date();
console.log(currentDate);

let milliseconds = new Date(0);
// console.log(milliseconds.getFullYear());

let dateString = new Date("Aug 29 2019 08:34:00");
// console.log(dateString);

let componentDate = new Date(1999, 11, 25, 14, 00, 0, 0);
// console.log(componentDate);

// set methodları;

// currentDate.setFullYear(1999);
// console.log(currentDate.getFullYear());
 

let date = new Date();
console.log(date.getDate());

let hour = date.getHours();
let min = date.getMinutes();


console.log('${hour}:${min}');

let day = date.toLocaleDateString("default", {weekday: "long"});
console.log(day);
