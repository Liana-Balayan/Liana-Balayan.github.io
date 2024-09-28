////// տ ն ա յ ի ն ա շ խ ա տ ա ն ք /////////
 

//1. Given a number. Print the sum of digits.
////// while  //////
let num = +prompt();
let sum = 0;
while(num > 0){
  sum +=num % 10;
  num = Math.floor(num / 10)
}
console.log(sum);

///// for  ///////
let i = +prompt();
let sum = 0;
for(; i > 0; i = Math.floor(i / 10) ){
  sum += i % 10;
}
console.log(sum);

//2. Given a number. Print the multiplication of 
//digits.
////// while  //////
let num = +prompt();
let sum = 1;
while(num > 0){
  sum *=num % 10;
  num = Math.floor(num / 10)
}
console.log(sum);

///// for   //////
let i = +prompt();
let sum = 1;
for(; i > 0; i = Math.floor(i / 10) ){
  sum *= i % 10;
}
console.log(sum);


//3. Insert a number. Calculate product and sum of 
//the digits of the number. If product is
//divisible by the sum, print the quotient, otherwise
// print the remainder.


let num = +prompt()
let sum = 0;
let product = 1;
for( ; num > 0;num =Math.floor(num / 10)){
  for( ; num > 0;num =Math.floor(num / 10)){
  sum +=num % 10;
  product *=num % 10;
  };
  console.log(sum);  
  }
  console.log(product);

if(product / sum === 0){
  console.log(product / sum);
  
}else{
  console.log(product % sum);
  
}
