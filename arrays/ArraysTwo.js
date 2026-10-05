let marvel = ["Ironman" , "Spiderman" , "Antman"]
let dc = ["Batman" , "Superman" , "Aquaman"]

console.log(marvel)
console.log(dc,"\n\n")

let all_heroes = [...marvel , ...dc] //Used for multiple like more than two
console.log(all_heroes)

let allSuperHeroes = marvel.concat(dc)
console.log(allSuperHeroes)

console.log("\n\n",Array.from("ABDULREHMAN"));
console.log(Array.of(marvel,dc).flat());
