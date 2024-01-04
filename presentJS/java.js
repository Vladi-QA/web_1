let user={
    name:"Ivan",
    age: 42,
    city:"Kyiv",
    isAdmin: true,
    };
console.log(user)
user.age = 40;
    
for (let key in user) { 
    console.log(user[key]);
}


let codeCountries = {
    1: "USA Canada",
    38: "Ukraine",
    49: "Germany"
}
for (let code1 in codeCountries){
    console.log(code1)
}
