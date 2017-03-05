export const merge = (obj1, obj2) =>
  Object.assign({}, obj1, obj2);

export const associate = (key, value, obj) =>
  ({...obj, [key]: value});

export const concat = (arr1, arr2) =>
  arr1.concat(arr2);

export const append = (elem, arr) =>
  [...arr1, elem];
