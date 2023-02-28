//function that finds an area of a circle given its radius (PI=3.14)
function CircleArea(r) {
  let PI = 3.14;
  let A = PI*r*r;
  return A;
}

Area = CircleArea(2);
console.log(Area);

//function to check whether a given number is even or odd.
function oddOreven(a) {
  if (a%2 == 1)  {
    console.log(a, " is odd");
  } else {
    console.log(a, " is even");
  }
}
oddOreven(6)
oddOreven(15)

//function that greets a person by his/her name (e.g. “Hi, John!”).
function hiname(name) {
  return console.log('Hi, %s!', name);
}

hiname("Aruzhan<3");