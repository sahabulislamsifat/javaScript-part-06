// console.log(this);

// const person = {
//   fistName: "Sahabul Islam",
//   lastName: "Sifat",
//   age: 22,
//   fullName: function () {
//     return this.fistName + " " + this.lastName;
//   },
//   getFullName: function () {
//     return this.fullName();
//   },
// };

// const result = person.getFullName();

// console.log(result);

// const personOne = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   getFullName: function () {
//     return this.fullName();
//   },
// };

// const personTwo = {
//   firstName: "Sahabul Islam",
//   lastName: "Sifat",
// };

// // console.log(personOne.getFullName());
// console.log(personOne.fullName.call(personTwo));

// var person = {
//   names: "David",
//   weight: 59.7,
//   height: 5.4,
//   calculateBMI: function () {
//     console.log(this);
//   },
// };

var person = {
  name: "Sifat",
  weight: 59.7,
  height: 5.4,
  calculateBMI: function () {
    console.log(this);
  },
};

person.calculateBMI();
