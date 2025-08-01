const repeatString = function (str, num) {
  let word = "";
  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    word += str;
  }
  return word;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);

const number = Math.floor(Math.random() * 1000);
repeatString("hey", number);
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
