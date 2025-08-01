let provinceName="malylam";

let reverse="";

for(let letter of provinceName){
    reverse=letter+reverse;
}
if(provinceName===reverse){
    console.log("It is palindrome word.=",reverse);
}
else{
    console.log("It is a normal word=",reverse);
}