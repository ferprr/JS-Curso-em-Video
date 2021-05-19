let values = [8,5,9,4,3] //it's an object

for(let pos in values) { //similar to py
    console.log(values[pos])
}

console.log(values.indexOf(8)) //position where element 8 is located
console.log(values.indexOf(7)) //returns -1 since the element doesn't exists in the array

values.sort() //put in order
console.log(values)