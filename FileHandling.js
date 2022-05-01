//Reading the precreated file...
const fs =require("fs");
const text =fs.readFileSync("toReadFromJs.txt","utf-8");
console.log(text);

//Created new txt file and Reading the content...
fs.writeFileSync("sample.txt","This file is created using javaScript...")
let text01=fs.readFileSync("sample.txt","utf-8");
console.log("New File is creating and Saving...");
console.log(text01);