// 10. Create an array of numbers and double each value using .map().

// 11. Convert an array of strings into a single comma-separated string.

// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])


//Solution 10:
let arr=[1,2,3,4,5];
arr=arr.map((u)=>{
    return u*2;
});

console.log(arr);//output: [2, 4, 6, 8, 10]

//Solution 11:

[1,2,3,4,5].join(','); // This will return the string "1,2,3,4,5"
[1,2,3,4,5].join('&') // This will return the string "1&2&3&4&5"

let arr=['hello','world','javascript'];
console.log(arr.join('*')); //output: "hello*world*javascript"

let arr2=['apple','banana','cherry'];
arr.toString(); // This will return the string "apple,banana,cherry"
console.log(arr2.toString()); //output: "apple,banana,cherry"

// // toString vs join:
// The toString() method converts an array to a string and separates the elements 
// with commas by default. The join() method also converts an array to a string, 
// but it allows you to specify a custom separator between the elements. I
// f you don't provide a separator, join() will use commas by default, just like toString().
//  However, if you want to use a different separator (e.g., a space, a hyphen, etc.), you can pass it as an argument to the join() method. 

//Solution 12:
let arr=[1, [2, 3], 4];
let flattened=arr.flat();
//flat(4) will flatten the array up to 4 levels deep. [1,2,3[[[7,6]]]] => [1,2,3,7,6]
console.log(flattened); //output: [1, 2, 3, 4]

arr.splice(1,1,...arr[1]); // This will modify the original array to be flattened.
console.log(arr); //output: [1, 2, 3, 4]

//Splice:
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The syntax for splice() is: array.splice(start, deleteCount, item1, item2, ...)
// - start: The index at which to start ]
// - deleteCount: The number of elements to remove from the array.
// - item1, item2, ...: The elements to add to the array, starting from the index specified by start. If no elements are specified, 
// splice() will only remove elements from the array.
