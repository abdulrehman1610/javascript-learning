const newObj = {
    name : "Taha",
    class : "6B"
}


for (const key in newObj){
    //console.log(key,":",newObj[key]);
    
}

const newMap = new Map()
newMap.set('name','abdulrehman')

// console.log(newMap);

for (const [key,value] of newMap) {
    console.log(`${key} : ${value}`);
    
}
