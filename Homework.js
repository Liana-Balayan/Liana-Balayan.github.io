
//Given an object. Invert it (keys become values and values
    // become keys)
let obj = { a: "1", b: "2"}
let newObj = {};
for(let key in obj ){
    newObj[obj[key]] = key 
}
console.log(newObj);
