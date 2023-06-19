let book = ['html','CSS','bootstrap','javascript','react','nodejs','python'];

console.log("-----Array using for loop-----");

for(let i=0; i<book.length; i++)
{
    console.log(i, " => ",book[i]);
}

console.log("-----Array using Do While-----");

let i=0;
do{
    console.log(book[i]);
    i++;
}while(i<book.length);

console.log("-----Array using While loop-----");

let j=0;
while(j<book.length)
{
    console.log(j, " => ", book[j]);
    j++;
}
