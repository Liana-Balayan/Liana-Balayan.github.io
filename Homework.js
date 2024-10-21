////// տ ն ա յ ի ն ա շ խ ա տ ա ն ք /////////
 

function longestWord(sentence) {
    let longest = '';
    let Word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                Word += sentence[i]; 
            }
            if (Word.length >= longest.length) {
                longest = Word;
            }
            Word = '';
        } else {
            Word += sentence[i];
        }
    }    
    return longest;
}
console.log(longestWord("A revolution without dancing is a revolution not worth having")); 



//3.Write a function to compute a new string from the given one by
// moving the first char to
//come after the next two chars, so &quot;abc&quot; yields &quot;
//bca&quot;. Repeat this process for each
//subsequent group of 3 chars. Ignore any group of fewer than 3 chars
// at the end.
 
function fn(str){
     let res = "";
for(let i = 0; i < str.length; i = i + 3){
     if (i + 2 < str.length){
          let first = str[i];
          let second = str[i + 1];
          let third = str[i + 2];
          res += third + second + first 
     }
}
        return res
}
console.log(fn("abcdefgh"));
