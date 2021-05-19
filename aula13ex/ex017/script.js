function multiplicationTable() {
    let numbertxt = document.getElementById('txtnum')
    let result = document.getElementById('result')

    if (numbertxt.value.length == 0) {
        alert('[ERRO] Missing data. Try again.')

    } else if (numbertxt.value == 0) {
        let item = document.createElement('option')
        result.innerHTML = ''
        item.text = 'Every number multiplied by 0 is equal to 0.'
        result.appendChild(item)
    } else {
        let number = Number(numbertxt.value)
        let multiplier = 1
        result.innerHTML = ''
        while (multiplier <= 10) {
            let item = document.createElement('option')

            item.text = `${number} x ${multiplier} = ${number * multiplier}`
            item.value = `${multiplier}`
            multiplier++

            result.appendChild(item)
        }
    }
}