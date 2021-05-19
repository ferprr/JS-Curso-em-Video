function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fullAno = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if (fullAno.value.length == 0 || fullAno.value > year) {
        alert('[ERROR] Invalid data. Try again.')
    } else {
        var fgender = document.getElementsByName('radgen')
        var age = year - fullAno.value
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if (fgender[0].checked) {
            gender = 'man'
            if(age >= 0 && age < 10) {
                img.setAttribute('src', '../bebe-menino.png')
            } else if (age < 21) {
                img.setAttribute('src', '../homem-jovem.png')
            } else if (age < 50) {
                img.setAttribute('src', '../homem-adulto.png')
            } else {
                img.setAttribute('src', '../homem-idoso.png')
            }
        } else if (fgender[1].checked) {
            gender = 'woman'
            if(age >= 0 && age < 10) {
                img.setAttribute('src', '../bebe-menina.png')
            } else if (age < 21) {
                img.setAttribute('src', '../mulher-jovem.png')
            } else if (age < 50) {
                img.setAttribute('src', '../mulher-adulta.png')
            } else {
                img.setAttribute('src', '../mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detected a ${age} years old ${gender}.`
        res.appendChild(img)
    }
}