
import foods from './foods'
import {choice, remove} from './helpers'

let fruit = choice(foods)
// let remaining = remove(foods, fruit)

console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)

// console.log(`I'm sorry, we're all out. We have ${remaining.length} other fruits left.`)

let remaining = remove(foods, fruit);
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I’m sorry, we’re all out. We have ${remaining.length} other foods left.`);