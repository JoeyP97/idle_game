let total = document.querySelector('.total')
let increase = document.querySelector('.increase')
let number = 97
let multi = 1
let barrier = 100
let rateOfTick = 1000
increase.textContent = barrier
total.textContent = number

function add() {
    if (number >= barrier) {
        number -= barrier
        multi += .2
        barrier *= 2
        increase.textContent = barrier
    }
}

// Increase number every x seconds by x
setInterval( () => {
    number += (1 * multi)
    total.textContent = number.toFixed(2)
    if (number >= barrier) {
        increase.style.backgroundColor = "rgb(197, 197, 197)"
        increase.style.boxShadow = "2px 2px 5px gray"
    }
    else if (number < barrier) {
        increase.style.backgroundColor = "rgb(103, 102, 102)"
    }
},rateOfTick)

