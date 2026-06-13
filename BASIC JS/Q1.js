// 1. Create a function that returns the last element of an array.

// 2. Find the combination of two arrays.

// 3. Generate a random integer between 0 to 18.

//Soultion 1:

 function fun(arr){
    console.log(arr[arr.length-1]);
 }

const fun2=(arr)=>{
console.log(arr[arr.length-1]);
}

fun([1,3,4,5,6]);

fun2([3,4]);


//Solution 2:
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];

let arr3=arr1.concat(arr2);
console.log(arr3);//output: [1, 2, 3, 4, 5, 6, 7, 8]

let comibanation=[...arr1,...arr2]; //spread operator
console.log(comibanation);//output: [1, 2, 3, 4, 5, 6, 7, 8]


//Solution 3:
// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// To get a random integer between 0 and 18, we can multiply the result of Math.random() by 19 (since we want to include 18) and then use Math.floor() to round down to the nearest integer.

Math.floor(Math.random() * 19); // This will give a random integer between 0 and 18 (inclusive).
Math.round(Math.random() * 18); // This will give a random integer between 0 and 18 (inclusive).

//round vs floor:
// Math.floor() always rounds down to the nearest integer, while Math.round() rounds to the nearest integer. 
// For example, Math.floor(4.7) will return 4, while Math.round(4.7) will return 5. 
// In the context of generating a random integer between 0 and 18, both methods will work, but using Math.floor() is more appropriate since we want to ensure that the maximum value is 18.


//to generate a random number between 10 to 98

Math.floor(Math.random()*(98-10+1))+10; // This will give a random integer between 10 and 98 (inclusive).
