console.log("Nested if Example");

let input = 101;

// isNaN()  -   Is Not A Number, if a string - then => True, if number then => False

if(isNaN(input))
{
    console.log(input," is a string");
}
else
{
    console.log(input," is a number");

    if(input %2==0)
    {
        console.log(input," is a even number");
    }
    else
    {
        console.log(input," is a odd number");
    }
}