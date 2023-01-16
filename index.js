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
       
console.log(namesFound); // Names found as an array
      
for (let index = 0; index < namesFound.length; index++) {   // Names found as a separate console logs 
    console.log(namesFound[index]); 
}

// Word search

const inTheEnd = [ "I tried so hard", "And got so far", "But in the end", "It doesn't even matter"];
const keyWord = "And";

let phraseFound = inTheEnd.find(element=> element.includes(keyWord));
console.log(phraseFound);