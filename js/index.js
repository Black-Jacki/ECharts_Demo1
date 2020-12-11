setInterval(time, 1000)

function time() {
    dt = new Date()
    let y = dt.getFullYear()
    let mt = dt.getMonth() + 1
    let day = dt.getDate()
    let h = dt.getHours()
    let m = dt.getMinutes()
    let s = dt.getSeconds()
    document.querySelector('.showTime').innerHTML = 'DATE：' + y + '-' + mt + '-' + day + '&nbsp; ' + h + ':' + m + ':' + s
}