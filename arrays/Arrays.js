let array = [0, 1, 2, 3, 4, 5]

console.log(array)

let newArray = array.slice(0,2)
console.log(`The newArray is:${newArray}`);
console.log(`The Array is:${array}\n\n`);

let latestArray = array.splice(0,2)    //Splice effects the original array
console.log(`The latestArray is:${latestArray}`); //Output: 
console.log(`The Array is:${array}`); 


let arr = [1,2,3,4,5,6]
console.log(arr.includes(1))
console.log(arr.indexOf(1))