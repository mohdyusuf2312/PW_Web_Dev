const oneArray = [1,2,3,4];
const twoArray = [5,6,7,8];

// const threeArray = oneArray.concat(twoArray);
const threeArray = [...oneArray, ...twoArray];
console.log(threeArray);

const sitename = "pwskills";
console.log(...sitename);