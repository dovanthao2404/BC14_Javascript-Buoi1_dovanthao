var number = -45;
number = Math.abs(number);
var sum = (number % 10) + Math.floor((number /= 10));
console.log(sum);
