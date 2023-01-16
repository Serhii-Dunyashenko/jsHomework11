// 1. Equal items filter

const array = ['one', 'two', 'three', 'three'];

let filteredArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
});

console.log(filteredArray);

// 2. Equal arrays check

const firstArray = ['one', 'two', 'three', 'eternity'];
const secondArray = ['one', 'two', 'three', 'eternity', 'something'];
let check;
if (firstArray.toString() === secondArray.toString()) {
    check = true;
} else {
    check = false;
};
