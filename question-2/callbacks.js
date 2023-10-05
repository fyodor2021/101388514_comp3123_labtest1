"use strict";
const resolvedPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = `This promise is resolved`;
      resolve(message);
    }, 500);
  });
  return promise;
};

const rejectedPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = `This promise is rejected`;
      reject(message);
    }, 500);
  });
  return promise;
};

resolvedPromise().then((data) => {
  console.log(data);
});

rejectedPromise().catch((data) => {
  console.log(data);
});
