//object 

let user = {

    fullname: "Ganesh",
    age:"30 years",
    gender: "Male",
    city: "Bangalore",
    edu:"MCA"
};

console.log("About User");
console.log(user.fullname);
console.log(user.age);
console.log(user.gender);
console.log(user.city);
console.log(user.edu);

// Array of object

let userlist=[
    {fullname: "Ganesh", age:"30 years", gender: "Male", city: "Bangalore", edu:"MCA"},
    {fullname: "Ramesh", age:"29 years", gender: "Male", city: "Tirupathi", edu:"MCA"},
    {fullname: "Mahesh", age:"28 years", gender: "Male", city: "Madanapalle", edu:"MCA"},
    {fullname: "Suresh", age:"27 years", gender: "Male", city: "Chennai", edu:"MCA"},
    {fullname: "Magesh", age:"26 years", gender: "Male", city: "Hyderabad", edu:"MCA"}
];

console.log("Total Users: ",userlist.length);
userlist.map((myuser, index)=>{
    console.log(myuser);
    console.log("---------------------------");

})

console.log("Total Users: ",userlist.length);
userlist.map((myuser, index)=>{
    console.log(myuser.fullname,myuser.age,myuser.gender,myuser.city,myuser.edu);
    console.log("---------------------------");

})

console.log("-------------Using forEach()--------------");
userlist.forEach((userInfo,index)=>{
    console.log(index, "=>", userInfo.fullname,userInfo.age,userInfo.gender,userInfo.city,userInfo.edu);
    console.log("---------------------------");
}
)