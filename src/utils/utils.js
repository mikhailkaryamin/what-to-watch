const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const extend = (preObj, newObj) => {
  return Object.assign({}, preObj, newObj);
};

export {
  extend,
  getId,
  getRandomElement,
  getRandomNumber,
};
