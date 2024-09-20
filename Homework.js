////// տ ն ա յ ի ն ա շ խ ա տ ա ն ք //////////

//1.Given an age, figure out whether someone is a 
//baby(1 months - 12 months), toddler (1
// year - 2 years), child(3 years - 12 years ), 
//teenager(13 years - 17 years) or adult(18
//years and more ). Also check that age in months 
//is between 1 and 12.

const ageInMonths = +prompt();
if (ageInMonths >= 1 && ageInMonths <= 12) {
    console.log("Baby");
} else if (ageInMonths >= 13 && ageInMonths <= 24) {
    console.log("Toddler");
} else if (ageInMonths >= 25 && ageInMonths <= 144) {
    console.log("Child");
} else if (ageInMonths >= 145 && ageInMonths <= 204) {
    console.log("Teenager");
} else{
    console.log("Adult");
} 


//2. Given three numbers. Sort them by the 
//ascending order.

let a = -23;
let b = -456;
let c = 0;
if(a > b){
  [a, b] = [b, a];
}
if(a > c){
   [a, c] = [c, a];
}
if(b > c){
   [b, c] = [c, b];
}
console.log(a, b, c);

//5. Given a number. Print all digits of the 
//given number.
let num = +prompt();
 let numStr = num.toString().split('').join(',')
    console.log(numStr);
    