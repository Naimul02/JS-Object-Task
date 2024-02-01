// practice task 1
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
// bracket notation
const outputGoldenRod = colors["golden rod"];
// console.log("GoldenRod : ", outputGoldenRod);

// practice task 2
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

const propName = "passenger capacity";
car[propName] = 5;
// console.log(car)

// practice task 3
const student = {
  name: "Naimul",
  id: 123,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
const marks = student.physics.marks;
console.log("physics mark is : ", marks);

// practice task 4
const student1 = {
  name: "ariana grande",
  age: 21,
  city: "Gariyabanda",
  isStudent: true,
};
const properties = Object.keys(student1);
// console.log(properties)
const output = properties.length;
console.log(output);

// practice task 5

const myObject = {
  name: "John Doe",
  age: 25,
  city: "example city",
  isStudent: true,
};
for (const prop in myObject) {
  let key = prop;
  let value = myObject[prop];
  // console.log(value)

  const propValue = key + " : " + value;
  // console.log(propValue);

  const checktypeOf = typeof value;
  const typeCheck = value + " : " + checktypeOf;
  // console.log(typeCheck)

  let output = propValue.concat(" | ").concat(typeCheck);
  console.log(output);
}

