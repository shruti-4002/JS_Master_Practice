// 7. In an array of objects filter out those objects which have gender's value male.

// 8. Given an array of strings, return a new array where all strings are in uppercase.

// 9. Check if an object is empty (has no keys).

//Solution 7:
let arr=[
    {name:'rani',gender:'female'},{name:'gopal',gender:'male'},{name:'vian',gender:'male'}
]

let arr2=arr.filter((u)=>{
return u.gender=='male'      // or u['gender']=='male'
});

console.log(arr2);  //output: [ { name: 'gopal', gender: 'male' }, { name: 'vian', gender: 'male' } ]

//Solution 8:
let arr=['hello','world','javascript'];

let arr2=arr.map((u)=>{
    return u.toUpperCase();
}); 

console.log(arr2); ////output: ['HELLO', 'WORLD', 'JAVASCRIPT']

//Solution 9:
let obj={};
console.log(Object.keys(obj).length === 0); //output: true
let obj2={a:1};
console.log(Object.keys(obj2).length === 0); //output: false