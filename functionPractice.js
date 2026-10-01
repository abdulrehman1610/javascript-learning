function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("H");
    console.log("A");
}

sayMyName()

function addTwoNumbers(num1 , num2){
    return num1 + num2
}

const result = addTwoNumbers(3 , 5)
console.log("\n",result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");    
        return;
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("Taha"));
console.log(loginUserMessage());
console.log(loginUserMessage(123));

const user = {
    usernmae : "Taha",
    price : 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

console.log();

handleObject({
    username : "ALi",
    price : 300
})

console.log();


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));