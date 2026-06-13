// 4. Create a function that takes an array containing both numbers and strings, and returns a
// new array containing only the string values.

// 5. Find the maximum number in an array.

// 6. Write a function that returns the length of a given object (number of keys).

//Solution 4:

function fun(arr){
let newarr=arr.filter((u)=>{
    if(typeof u=== 'string'){
        return true;
    }
}

);
console.log(newarr);//output: ['a', 'hello']
}

fun([1,3,'a',"hello"]);


//Solution 5:
let arr=[1,3,4,5,6];
let max=Math.max(...arr);
console.log(max);//output: 6



//Solution 6:
Object.keys(objname)// This will return an array of the keys in the object, and then we can use the length property to get the number of keys.
example:
let obj={a:1, b:2, c:3};
console.log(Object.keys(obj));//output: ['a', 'b', 'c']
//arr.length 
console.log(Object.keys(obj).length);//output: 3
