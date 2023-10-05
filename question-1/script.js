"use strict";
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(mixedArray) {
  let filteredData = [];

  const promise = new Promise((resolve, reject) => {
    for (let index in mixedArray) {
      if (typeof mixedArray[index] == "string") {
        filteredData.push(mixedArray[index].toLowerCase());
      }
    }
    if (filteredData.length == 2) {
      resolve(filteredData);
    } else {
      reject(
        `something went wrong, the array doesn't contain the expected values.`
      );
    }
  });

  return promise;
}

lowerCaseWords(mixedArray).then(
  (data) => {
    console.log(data);
  },
  (data) => {
    console.log(data);
  }
);
