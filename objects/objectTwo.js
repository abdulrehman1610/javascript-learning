const tinderUSER = {}
tinderUSER.id = "123abc"
tinderUSER.name = "Taha"
tinderUSER.isloogedIn = true

console.log(tinderUSER);


const regularUser = {
    email: "123@gmail.com",
    name :{
        fullname : {
            firstname : "Muhammd Abdul",
            lastname : "Rehman"
        }
    }
}

console.log(regularUser.name.fullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// MERGING OBJECTS...

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const obj5 = Object.assign({},obj1,obj2,obj4)
console.log(obj5);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)

console.log(Object.keys(tinderUSER))
console.log(Object.values(tinderUSER))
console.log(Object.entries(tinderUSER))
console.log(tinderUSER.hasOwnProperty('isloggedin'))


const course = {
    name:"JS",
    price: 999,
    instructorname : "Taha"
}

const {instructorname : instructor} = course
console.log(instructor);
