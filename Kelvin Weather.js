//create a variable to store temperature in kelvin
const kelvin = 0;
//console.log(kelvin);

/*create variable to store temperature in celsius which is always minus 273 than temperature in kelvin*/
let celsius = kelvin - 294;
//console.log(celsius);

let fahrenheit = celsius * (9/5) + 32;
//console.log(fahrenheit);

/*create a variable to store a rounded number of the temperature in fareinheit*/
let roundFahrenheit = Math.floor(fahrenheit);
console.log(roundFahrenheit);


console.log(`The temperature is ${roundFahrenheit} degrees Fahrenheit.`);

console.log(" ");

let newton = celsius * (33/100);
console.log(newton);

let roundNewton = Math.floor(newton);
console.log(roundNewton);

console.log(`The temperature is ${roundNewton} degrees in Newton`);
