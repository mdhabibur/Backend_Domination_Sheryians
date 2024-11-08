console.log("javascript basics: ")

//understanding variables
//declared using var, let, const


//exploring different types of data types

/* primitive and reference data type 

primitive : normal
var a = 22
let name = 'ali'


reference : variables with (), {}, []
var nums = [1,2,3]
let product = {name: 'pro1', price: 25}

*/

//how to copy primitive variables
var a = 22
var b = a

// but reference variables are not copied in this way 
let num1 = [11, 12, 13]
let num2 = num1 

//if copied in this way, reference of num1 is copied, so modifying num1 will modify num2 also and vice-versa which is unwanted
num2.pop()

//so how to copy in a correct way : way 1: by spread operator

let num3 = [1, 2, 3]
let num4 = [...num3]

num4.pop()
//now num3 is not modified with the modification of num4 array

//similarly for object data type which is also reference type
let p1 = {name: 'ali', age: 23}

let p2 = {...p1}
p2.age = 25




