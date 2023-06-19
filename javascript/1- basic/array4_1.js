// object

let user = {
    fullname : "Ganesh",
    age : "30 Years",
    gender : "Male",
    city : "Bangalore",
    edu : "MCA"
};

console.log("About User");
console.log(user.fullname);
console.log(user.age);
console.log(user.gender);
console.log(user.city);
console.log(user.edu);

// Array of object

let userlist = [
    { fullname : "Ganesh", age : "30 Years", gender : "Male", city : "Bangalore", edu : "MCA"},
    { fullname : "Mahesh", age : "31 Years", gender : "Male", city : "mangalore", edu : "MBA"},
    { fullname : "Ajith",  age : "32 Years", gender : "Male", city : "Pune", edu : "BCA"},
    { fullname : "Suresh", age : "40 Years", gender : "Male", city : "Chennai", edu : "Btech"},
    { fullname : "Ali",    age : "50 Years", gender : "Male", city : "Hyderabad", edu : "Mtech"},
    { fullname : "Sumith", age : "20 Years", gender : "Male", city : "Tirupathi", edu : "Masters"}
];

console.log("Total Users : ", userlist.length);

userlist.map((myuser, index) => {
    console.log(myuser.fullname, myuser.age, myuser.gender, myuser.city, myuser.edu);
    console.log("-------------------------------------------");
})

console.log("--------Using forEach()--------")

userlist.forEach((userinfo, index) => {
    console.log(index, " => ", userinfo.fullname, userinfo.age, userinfo.gender, userinfo.city, userinfo.edu);
    console.log("-----------------------------------------------");
})