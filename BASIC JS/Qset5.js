// 13. Write a function that checks if all elements in an array are numbers.

// 14. Build a simple isPrime() function to check if a number is prime.

// 15. Create a function that removes duplicate values from an array.

//Solution 13:
function fun(arr){

let val=true;
arr.forEach((element)=>{
if(typeof element != 'number'){
    val=false;
   
}
});

return val;   //Note: forEach cant return 
            //use every() method instead of forEach to check if all elements are numbers.



}

let arr=[1,2,3,4];
let arr2=["hello",3,4,"hey"];

let boolarr=fun(arr);
let boolarr2=fun(arr2);
console.log(boolarr);
console.log(boolarr2);


//method 2: use every 
arr.every((element)=>{
    if(typeof element != 'number'){
        return false;
    }
    return true;
}
);


//Solution 14:
function isprime(num){
  
  let end=Math.floor(Math.sqrt(num));

  for(let i=2;i<=end;i++){
    if(num%i==0){
        return false;
    }
  }

  return true;
}

console.log(isprime(6));


//Solution 15:


    function removeDuplicate(arr){
let set=new Set(arr);
return [...set];
}


console.log(removeDuplicate([2,2,3,4,3,5,6]))


function method2(arr){
    let newarr=arr.filter((element,index)=>{
        return index==arr.indexOf(element )
    })

    console.log(newarr);
}

method2([5,6,7,8,9,4,4,4,6,5])


let arr=[1,6,7,78]
console.log(arr.indexOf(78))




