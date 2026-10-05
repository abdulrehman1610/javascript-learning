const add = ((num1, num2)=>{
    console.log(`${num1} + ${num2} is:${num1 + num2}`)
})(2,3);


(
    (num1,num2)=>(console.log(num1+num2))
)(1,2);