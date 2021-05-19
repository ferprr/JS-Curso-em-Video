function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var date =  new Date()
    var hour = date.getHours()
    msg.innerHTML = `Now it's ${hour} o'clock.`

    if (hour >= 0 && hour < 12) {
        img.src = '../manha.png'
        document.body.style.background = '#87bbd4'
    } else if (hour >= 12 && hour < 18) {
        img.src = '../tarde.png'
        document.body.style.background = '#719ead'
    } else {
        img.src = '../noite.png'
        document.body.style.background = '#013334'
    }
}
