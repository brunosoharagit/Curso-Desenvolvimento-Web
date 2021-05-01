const fullName = (firstName, lastName) => {return `Olá ${firstName} ${lastName}! Sou uma função...`;};

console.log(fullName("Bruno", "Sohara"));


const verifyUser = (username) => { return username = username || 'Desconhecido'}

console.log(verifyUser());
console.log(verifyUser("Yotyan"));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

let double = numbers.map(item => item * 2)
console.log(double);