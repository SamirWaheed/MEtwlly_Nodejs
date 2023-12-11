let frutes =["appel","orange","tomato","banana"];
let cars =["BMW","toyota","aodi","volvo"];
// for delet index from arr we are  useing splice 
cars.splice(2,1);

console.log(cars);
// we can add index into an array by using parametr in splice

cars.splice(0,0,"honda");
console.log(cars);

console.log(cars.join(" <> "));
let arr =frutes.concat(cars);
console.log(arr);

// to return num of index in array we used indexof
console.log(arr.indexOf("volvo"));

//we used #includes to check if items in arr or not 
console.log(cars.includes("kia"));
console.log(cars.includes("BMW"));

