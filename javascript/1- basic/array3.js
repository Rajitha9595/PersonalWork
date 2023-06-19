let book = ['html','CSS','bootstrap','javascript','react','nodejs','python'];

/**
 * How map() work?
 * 
 * Syntax
 * arrayName.map((element, index) => {
 *  statement...
 * })
 */

book.map((bookname, index)=>{
    console.log(index, " =====> ",bookname);
})

console.log("-----For Each Example-----");

book.forEach((mybook, index) => {
    console.log(index, " -----> ", mybook);
});