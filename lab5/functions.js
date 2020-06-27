function max(n1,n2){
    if(n1>n2){
        return n1;
    }
    else {
        return n2;
    } 
}
function maxOfThree(n1,n2,n3){
   return max(max(n1,n2),n3);
}
function isVowel(char){
    char = char.toLowerCase();
    let result = char=="A" ||char=="E"||char=="I"||char=="O"||char=="U";
}

function sum(...arr) {
    arr.reduce((accumulator,item)=> {return accumulator+item});
}
function multiply(...arr) {
    arr.reduce(
        (accumulator,item)=>{ return accumulator*item}
    );
}
function reverse(word) {
    let reversedWord = "";
    for(let i = word.length-1;i>=0;--i){
        reversedWord += word[i];
    }
    return reversedWord;
}
function findLongestWord(...words) {
    return words.reduce((longestWord="",word)=>{return max(longestWord.length,word.length)})
}
function filterLongWords(i,...words) {
    return words.filter(word=>word.length>i);
}
//slides map/filter/reduce

const mapExample = (...arr)=>{arr.map(elem=>elem*10)};
const filterExample= (...arr)=>{arr.filter(num=>num===3)};
const reduceExample = (...arr)=>{arr.reduce(
    (accumulator,elem)=>{return accumulator*elem}
)};
function myFunctionTest(expected,found){
    if(expected===found()){
        return "TEST SUCCEEDED";
    }
    else{
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

console.log("Expected output of max(20,10) is 20 "+myFunctionTest(20, ()=>max( 20, 10)));