var number = -32;
number = Math.abs(number);
var sum = (number % 10) + Math.floor((number /= 10));
console.log(sum);
