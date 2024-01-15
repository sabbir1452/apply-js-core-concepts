// 1. variable
var myName = "Khan";

// math operation: +, -, *, /
// shorthand: +=, --, *=, /=
// ++, --

// 2. Array
var friends = ["abul", "babul", "cabul", "dabul", "ebul"];
var thirdFriend = friends[2];
friends[3] = "dambool";
console.log(friends);

//3. conditionals
// >, <, >=, <=, ==, ===, !=, !==
if (friends.length) {
  console.log("fokir tor kono friend nai");
}

//4. loop
var number = 0;
while (number <= 6) {
  console.log(number);
  number++;
}

for (var i = 0; i <= 10; i++) {}

//5. function
function isMoonUp(time) {
  if (time > 7) {
    return true;
  }
}
isMoonUp(4);

// 6. Object

var jantus = {
  height: 60,
  romaticism: "heavy",
  baapErTaka: "borolox",
};

var wannaKnow = jantus.height;

console.log(wannaKnow);
