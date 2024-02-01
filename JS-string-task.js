// practice task 1
const des =
  "I Love BanglAdesh.I Love BanglAdesh.I Love BanglAdesh.I Love BanglAdesh";

let a = 0;
for (let i of des) {
  // console.log(i);
  if (i.toLowerCase() === "a") {
    a++;
  }
}
// console.log("a :" ,a)

// practice task 2
const des1 =
  "I Love BanglAdesh.I Love BanglAdesh.I Love a A A a A a .I Love BanglAdesh";

let result = 0;
for (let i of des1) {
  if (i === "a" || i === "A") {
    result++;
  }
}
// console.log(result);

// practice task 3
const sentences = "In grammar, e i o u badfdfasdf      o";

let vowel = "";
for (let i of sentences) {
  if (i.toLowerCase() === "a") {
    console.log("This letter is vowel", i);
  } else if (i.toLowerCase() === "e") {
    console.log("This letter is vowel", i);
  } else if (i.toLowerCase() === "i") {
    console.log("This letter is vowel", i);
  } else if (i.toLowerCase() === "o") {
    console.log("This letter is vowel", i);
  } else if (i.toLowerCase() === "u") {
    console.log("This letter is vowel", i);
  }
  //    else {
  //      console.log("There is no vowel");
  //    }
}
// practice task 4
const string = "We use cookiex to ensure you have the best browsinX";
console.log(string);

let replaceStr = string.replace("x", "X");
// console.log(replaceStr);

let rs = string.replace("X", "x");
// console.log(rs);

// practice task 5
let output5 = "We use cookiex to ensure you have the best browsinX";
let str_array = output5.split(" ");
console.log(str_array);

for (let i = 0; i < str_array.length; i++) {
  str_array[i] = str_array[i][0].toUpperCase() + str_array[i].slice(1);
}
console.log(str_array);
const result6 = str_array.join(" ");
console.log(result6);
