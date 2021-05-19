function count() {
    let begin = document.getElementById('txtbeg')
    let end = document.getElementById('txtend')
    let step = document.getElementById('txtstep')
    let res = document.querySelector('div#res')

    if (begin.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible counting.'
        alert('[ERRO] Missing data.')
    } else {
        let beginLoop = Number(begin.value)
        let endLoop = Number(end.value)
        let stepLoop = Number(step.value)

        res.innerHTML = 'Counting: <br>'

        if (stepLoop <= 0) {
            window.alert('Invalid step. Considering step=1.')
            stepLoop = 1
        }

        if (beginLoop < endLoop) {
            for (let c = beginLoop; c <= endLoop; c += stepLoop) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            res.innerHTML = 'Counting: <br>'
    
            for (let c = beginLoop; c >= endLoop; c -= stepLoop) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}