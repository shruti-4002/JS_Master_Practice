//parseInt vs Number
console.log(parseInt('10.456')); //output: 10
console.log(Number('10.456')); //output: 10.456
console.log(parseInt('10.456abc')); //output: 10
console.log(Number('10.456abc')); //output: NaN


//0.1+0.2==0.3 //output: false
//0.1+0.2 //output: 0.30000000000000004


let sum=(0.1+0.2).toFixed(1); //output: 0.3

let sum2=(0.1+0.2).toFixed(3); //output: 0.300
//typeof sum2 //output: String
console.log(Number(sum2)) //output: 0.3

console.log(Number(4.5677)); //output:4.5677

//Slice vs Splice
let arr = [1, 2, 3, 4, 5];
//slice(start, end) - returns a new array containing the elements from index start to end-1. It does not modify the original array.
console.log(arr.slice(1, 4)); //output: [2, 3, 4]
console.log(arr); //output: [1, 2, 3, 4, 5]

//splice(start, deleteCount, item1, item2, ...) - removes elements from the array and/or adds new elements. It modifies the original array.
arr.splice(1, 3); //removes elements from index 1 to 3
console.log(arr); //output: [1, 5] 


arr.slice(-4, -1); //output: [2, 3, 4]
//-ve index starts from the end of the array. -1 is the last element, -2 is the second last element, and so on.


//slice: array+string+no modify + original array safe
//splice:has modification power + only array+ change in original array


let arr2=[0,1,2,3,4,5];
let peice=arr2.splice(1,3);
console.log(peice)//output:[1,2,3]
console.log(arr2)//output:[ 0, 4, 5 ]
