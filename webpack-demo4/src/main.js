// var bar = require("./bar")

// bar()

// import bar from './bar'

// // bar()

// console.log(bar)

import {x,y,add} from './bar'

console.log(x,y,add(1,5))

import * as bar2 from './bar'
console.log(bar2)
console.log(bar2.x,bar2.y,bar2.add(2,3))
