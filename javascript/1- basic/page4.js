console.log("The Scope of variable...");

if(100>20)
{//block start here

    var a = "Bangaloe";
    let b = "Mumbai";
    const c = "Delhi";

    console.log(a);
    console.log(b);
    console.log(c);

}// block end here

console.log("-----Out of Block-----");
console.log(a);
console.log(b); // error b is not defined
console.log(c); // error b is not defined