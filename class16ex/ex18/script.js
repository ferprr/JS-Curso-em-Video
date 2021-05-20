let result = document.querySelector('div#result')
let numbers = []

function toAdd() {
    let newNumber = document.getElementById('txtnum')
    let added = document.getElementById('added')

    if (newNumber.value.length == 0 || newNumber.value < 1 || newNumber.value > 100) {
        alert("Invalid number. Try again.")
    } else if (numbers.includes(newNumber.value)) {
        alert("This value is already in the array.")
    } else {
        numbers.push(Number(newNumber.value))

        let item = document.createElement('option')
        item.text = `The added value was ${newNumber.value}.`
        added.appendChild(item)
        result.innerHTML = ''
    }
    newNumber.value = ''
    newNumber.focus()
}

function finalize() {

    if (numbers.length == 0) {
        alert("Add values before finalizing.")
    } else {
        let sum = 0
        result.innerHTML = ''
        numbers.sort(function(a, b){return a-b}) //ascending order
    
        result.innerHTML += `There are ${numbers.length} values added. <br>`
        result.innerHTML += `The smaller value typed was ${numbers[0]}. <br>`
        result.innerHTML += `The bigger value typed was ${numbers[(numbers.length)-1]}. <br>`
    
        for (let pos in numbers) {
            sum += numbers[pos]
        }
    
        result.innerHTML += `Adding all the values, we have ${sum}. <br>`
        result.innerHTML += `The average of the values added is ${sum/numbers.length}. <br>`
    }
}