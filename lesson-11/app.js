const lodash = require("lodash");

const list = [1, [2, [3, [4]]]];
const flatList = lodash.flattenDeep(list);
console.log(flatList);