let array = ['one', 'two', 'three', 'three'];

let filteredArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
});

console.log(filteredArray);