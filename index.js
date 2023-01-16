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

// 3. Letter finder

const names = ["Andrew", "Jane", "Alan", "Kate", "Serhii"];
let keyLetter = prompt("Enter the letter");
const namesFound = names.filter(element => element[0] === keyLetter);

// Names found array type
console.log(namesFound); 
 
// Names found as separate console logs 
for (let index = 0; index < namesFound.length; index++) {
    console.log(namesFound[index]); 
}
