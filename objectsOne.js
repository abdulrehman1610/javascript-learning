// Singleton: IF OBJECT MADE FROM CONSTRUCTOR THAN IT'S A SINGLETON OBJECT i.e: Object.create

// Object Literal
const key = Symbol("key")

const jsUser = {
    name  : "Abdul Rehman",
    [key] : "key1",
    "Full Name" : "Muhammad Abdul Rehman Ejaz",
    class : "BSCS-6B",
    age   : 20,

}

console.log(jsUser[key]);


jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this["Full Name"]}`);
    
}

jsUser.greeting()
jsUser.greeting2()