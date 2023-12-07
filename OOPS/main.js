// Class

// var item = {
//     name: 'Pen',
//     price: 50,
//     getDetails: function () {
//         return `${this.name}, ${this.price}`
//     }
// }

// console.log(item.getDetails())

// Bind

// var item = {
//     name: 'Pen',
//     price: 50,
//     getDetails: function () {
//         return `${this.name}, ${this.price}`
//     }
// }

// console.log(item.getDetails())

// var item2 = {
//     name: 'Pencil',
//     price: 5,
// }

// let foo = item.getDetails.bind(item2);
// console.log(foo())

// Call

// var item = {
//     getDetails: function () {
//         return `${this.name}, ${this.price}`
//     }
// }

// var item2 = {
//     name: 'Pencil',
//     price: 5,
// }

// var item3 = {
//     name: 'Eraser',
//     price: 7,
// }

// console.log(item.getDetails.call(item2))

// Apply

// var item = {
//     getDetails: function (category, rating) {
//         return `${this.name}, ${this.price}, ${category}, ${rating}`
//     }
// }

// var item2 = {
//     name: 'Pencil',
//     price: 5,
// }

// var item3 = {
//     name: 'Eraser',
//     price: 7,
// }

// console.log(item.getDetails.apply(item2, ['Stationery', 4.5]))

// Generator Function

// function* generator(i) {
//     yield i;
//     yield i + 10;
// }

// let gen = generator(10);

// console.log(gen.next().value);

// console.log(gen.next().value);

// Closures

// function makeFunc() {
//     const name = "Mozilla";
//     let i = 1;
//     function displayName() {
//         i = 10;
//         console.log(i);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// Computed Properties

// var item = {
//     name: 'Pen',
//     price: 50
// }

// item['id'] = 10

// console.log(item)

// Value Shorthand

// let item = {
//     name: 'Pen',
//     price: 50
// }

// console.log(item)

// let name = 'Pencil'
// let price = 5

// let item2 = {
//     name,
//     price
// }

// console.log(item2)

// Object Merging

// let person = {
//     id: '123-456-2356',
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'IN'
// };

// let employee = {
//     ...person,
//     ...job
// };

// console.log(employee);

// Destructuring Objects

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);

// Set

// let nums = new Set()
// nums.add(1)
// nums.add(2)
// nums.add(5)

// console.log(nums)

// nums.forEach((num) => console.log(num))

// Map

// let banks = new Map()
// banks.set(1, 'ICICI East')
// banks.set(5, 'HDFC')
// banks.set(3, 'ICICI West')

// console.log(banks)

// banks.forEach((bank) => console.log(bank))