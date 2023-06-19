// how to create array in javascript?

let book = ['html','CSS','bootstrap','javascript','react','nodejs','python'];
let user = new Array('Ganesh','Rafiq','Ahmad','Sumit');

// what is the structure of the array
    /*
        arrayName[index]=>element

        book[0]=>html
        book[1]=>CSS
        book[2]=>bootstrap
        book[3]=>javascript
        book[4]=>react
        book[5]=>nodejs
        book[6]=>python

        Note:- Array 1st value will be on 0 index position
               Last value comes on array.length-1 position
    */

    console.log(book.length);
    console.log(user[0]);
    console.log(user[user.length-1]); // dynamic syntax to access last element
    console.log(user[0]);

    console.log(book.length);
    console.log(book[0]);
    console.log(book[book.length-1]); // dynamic syntax to access last element
    console.log(book[6]);

    console.log("Read all elements from the array");

   for(let i=0; i<book.length;i++)
   {
    console.log(book[i]);
   }