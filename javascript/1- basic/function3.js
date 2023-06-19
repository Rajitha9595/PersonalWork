
// function with parameter

let yearlist = (start=null, end=null) =>{
    console.log("The years between", start, "and", end);
    for(let i = start; i<=end; i++){
        console.log(i);
    }
    console.log("-------End-------");
}


yearlist(1995, 2023);

yearlist(2017, 2021);

yearlist(1993,1995);

yearlist();