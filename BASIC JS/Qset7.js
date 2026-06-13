//Q:REVERSE WORDS OF STRING BUT KEEP POSITION OF WORDS SAME

let word="abcd";
console.log(word.split(''));  //  [ 'a', 'b', 'c', 'd' ]
console.log(word.split('').reverse());[ 'd', 'c', 'b', 'a' ]
console.log(word.split('').reverse().join(''));dcba

//join and reverse works on array


let sentence="hi everyone i am doing great";
let final=sentence.split(' ')//split on basis of space
//[ 'hi', 'everyone', 'i', 'am', 'doing', 'great' ]

let newarr=final.map((eachword)=>{
  return   eachword.split('').reverse().join('');
})

console.log(newarr);

//
let sentence="hi everyone i am doing great";
let final=sentence.split(' ')//split on basis of space
//[ 'hi', 'everyone', 'i', 'am', 'doing', 'great' ]

let newarr=final.map((eachword)=>{
  return   eachword.split('').reverse().join('');
})

console.log(newarr);

//outpu:[ 'ih', 'enoyreve', 'i', 'ma', 'gniod', 'taerg' ]
