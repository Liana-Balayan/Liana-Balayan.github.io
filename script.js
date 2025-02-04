

//2//Given an array of nested arrays. Write a recursive 
//function that flattens it. (Hint create function that 
//concats arrays).
// function flattenArray(arr) {
//     // եթե զանգվածը դատարկ է, վերադարձնում ենք դատարկ զանգված
//     if (arr.length === 0) {
//         return [];
//     }

//     // `arr[0]` (առաջին տարրը) կարող է լինել զանգված, թե ոչ
//     if (Array.isArray(arr[0])) {
//         // Եթե առաջին տարրը զանգված է, միացնում ենք այն հարթավորված մասի հետ
//         return flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
//     } else {
//         // Եթե առաջին տարրը չի է զանգված, պարզապես ավելացնում ենք այն արդյունքի զանգվածին
//         return [arr[0]].concat(flattenArray(arr.slice(1)));
//     }
// }

// // Օրինակներ
// console.log(flattenArray([1, [3, 4, [1, 2]], 10]))  
// console.log(flattenArray([14, [1, [[[3, []]], 1], 0]]))  


//3//Given a number. Write a function that calculates its sum of
//the digits and if that sum has more than 1 digit find the sum of
//digits of that number. Repeat that process if needed and return
//the result.
// function sumDigits(num) {
//     // Կոնվերտում ենք թիվը տող, որպեսզի կարելի լինի վերցնել յուրաքանչյուր թվանշան
//     num = Math.abs(num);  
//     let sum = 0;

//     //  թվանշանների գումարը
//     while (num > 0) {
//         sum += num % 10;  // Ավելացնում ենք վերջին թվանշանը
//         num = Math.floor(num / 10);  // Հանում ենք վերջին թվանշանը
//     }

//     // Եթե ստացված գումարը մեկ թվանշան է, վերադարձնում ենք այն
//     if (sum < 10) {
//         return sum;
//     }
//     return sumDigits(sum);
// }
// console.log(sumDigits(14));  
// console.log(sumDigits(29));   
// console.log(sumDigits(999999999999999));     

//4.// Given an array and a number N.  Write a recursive
//function that rotates an array N places to the left. (Hint: to
//add element to the beginning use arr.unshift())
// function rotateArrayLeft(arr, N) {
//     // Եթե N-ը 0 է կամ զանգվածը դատարկ է, վերադարձնում ենք այն առանց փոփոխությունների
//     if (N === 0 || arr.length === 0) {
//         return arr;
//     }
//     if (N < 0) {
//         return rotateArrayLeft(arr, arr.length + N);  
//     }

//     // Պտտում ենք առաջին տարրը դեպի վերջ և կիրառում ենք ռեկուրսիա մնացած տարրերի վրա
//     arr.push(arr.shift());  // Զանգվածի առաջին տարրը տեղափոխում ենք վերջ
//     return rotateArrayLeft(arr, N - 1);  // Կրկնում ենք N-1 անգամ
// }
// console.log(rotateArrayLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
//  console.log(rotateArrayLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2)); 


//5.// Given an object. Invert it (keys become values and values
  //  become keys). If there is more than key for that given value
  //create an array.
// function reverseObject(obj) {
//     const reversed = {};  // Ստեղծում ենք նոր օբյեկտ

//     // Անցնում ենք ամբողջ օբյեկտի վրայով
//     for (let key in obj) {
//         let value = obj[key];
        
//         // Եթե արժեքը արդեն կա reversed օբյեկտում
//         if (reversed[value]) {
//             // Ավելացնում ենք նոր բանալի, եթե արդեն արժեքի համար կա բազմակողմանի տարր
//             reversed[value].push(key);
//         } else {
//             // Եթե ոչ, ստեղծում ենք նոր զանգված
//             reversed[value] = [key];
//         }
//     }

//     return reversed;
// }
// console.log(reverseObject({ a: '1', b: '2' }));
// console.log(reverseObject({ a: '1', b: '2', c: '2' }));
// console.log(reverseObject({ a: '1', b: '2', c: '2', d: '2' }));


