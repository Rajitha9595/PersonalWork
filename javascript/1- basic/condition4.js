console.log("Switch Case Example");
/**
 * if else -> used to check range condition and exact condition.
 * switch case -> used to check only exact condition, not for range condition
 */

let url = "login.html";
switch(url)
{
    case "home.html":
    console.log("Load and Display home.html");
    break; // to stop the process and exit

    case "login.html":
    console.log("Load and Display login.html");
    break;

    case "about.html":
    case "service.html":
    console.log("Load and Display about.html");
    break;

    case "register.html":
    console.log("Load and Display register.html");
    break;

    default:
    console.log("Load and Display 404.html with sorry and link to home page");
    
}