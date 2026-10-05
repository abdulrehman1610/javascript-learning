function sum(a,b){
    console.log(a+b);  
}

// iife....

(function add(a,b){
    console.log(a+b);
    
})(5,3);

((a,b)=>{
    console.log(a+b)
})(7,3)