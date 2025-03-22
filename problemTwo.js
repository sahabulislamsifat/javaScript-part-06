// 01. Nicher sentence e 'Sifat' sobdoti koybar babohar kora hoyeche? prothombar 'Sifat' koto number position a pawa gache?

// const sentence =
//   "Learn with Sifat is all about teaching web development skills and techniques in an efficient practical manner. If you are just getting started in web development, learn with Sifat has all the tools has you need to learn newest and most popular technologies to convert you form a no stack to full stack development. learn with Sifat also deep dives into advance topics using latest best practices for you seasoned web development.";

// const match = sentence.match(/sifat/gi);
// const match = sentence.match(/sifats/gi);

// console.log(match);
// const occurances = match.length;
// const occurances = match ? match.length : 0;

// console.log(occurances);

//  0.2  Problem ****
// const position = sentence.search(/sifat/i);
// let position = sentence.search(/sifat/i);
// let position = sentence.search(/sifats/i);
// position = position >= 0 ? position : "not found!";

// console.log(position);
// console.log(position);

// 0.3 Problems
// input: linearSearch (['a','b','c','d','c'],('c'))
// output: 2 no or 'no found!'
// problem=> linearSearch() function ti ekti implement kore dekhan

// function linearSearch(arr, val) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return "not found!";
// }
// function linearSearch(arr, val) {
//   let length = arr.length;
//   for (let i = 0; i <= length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return "not found!";
// }

// // const result = linearSearch(["a", "b", "c", "d", "c"], "c");
// const result = linearSearch(["a", "b", "c", "d", "c"], "z");

// console.log(result);

// function linearSearch(arr, value) {
//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return "not found!";
// }

// // const result = linearSearch(["a", "b", "c", "d", "c"], "z");
// const result = linearSearch(["a", "b", "c", "d", "c"], "c");

// console.log(result);

// 0.4 kono array theke ki vabe sob theke boro string khuje ber korben ebong tar index number koto...

// function longestString(names) {
//   let = longestWord = "";
//   for (name of names) {
//     if (name.length > longestWord.length) {
//       longestWord = name;
//     }
//   }
//   return [longestWord, names.indexOf(longestWord)];
// }

// console.log(
//   longestString([
//     "Sahabul Islam Sifat",
//     "Learn with Sahabul Islam Sifat",
//     "River",
//     "Sky",
//     "nature",
//   ])
// );

// 0.5 1 - 100 porjonto kon songkkha guli 3, 5 ebong 3 o 5 uvoy songkha dara vivajjo ta ber korun....

// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is a fizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is a fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is a buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100);

// 0.6 Array theke ki vabe falsy value khuje ber kore baad dite parii????

// const mixedArray = [
//   "lws",
//   undefined,
//   "learn with Sifat",
//   NaN,
//   "",
//   40,
//   "k",
//   true,
//   "Thanks All",
// ];

// const trueArray = mixedArray.filter(function (element) {
//   if (element) {
//     return true;
//   } else {
//     return false;
//   }
// });
// const trueArray = mixedArray.filter(Boolean);

// console.log(trueArray);

// 0.6 Array theke ki vabe falsy value khuje ber kore baad dite parii????

// 0.7 Object theke ki vabe falsy value khuje ber kore baad dite parii????
const obj = [
  "lws",
  undefined,
  "learn with Sifat",
  NaN,
  "",
  40,
  "k",
  true,
  "Thanks All",
];

const truthyObject = function (obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};

console.log(truthyObject(obj));
