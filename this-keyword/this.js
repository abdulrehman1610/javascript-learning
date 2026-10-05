const user_data = {
    user : "Muhammad Abdul Rehman",
    greetings : `Hello ${this.user}, Welcome Again!!!`
}

console.log(user_data.greetings);



const user_data2 = {
    user : "Muhammad Abdul Rehman",
    greetings : function(){ 
        console.log(`Hello ${this.user}, Welcome Again!!!`);        
    }
}
console.log(user_data2.greetings());
