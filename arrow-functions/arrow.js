const one = function(){
    console.log(this);
    
}

one()

const two = ()=>{
    console.log(this);
    
}

two()


const sum = (num1 , num2)=> num1+num2  // implecint return
// const sum = (num1 , num2)=> (num1+num2)  // implecint return

// it is necesary to use return in curly braces

console.log(sum(3,4));


// for objects

const obj = ()=>({name:"Taha"})
console.log(obj());
