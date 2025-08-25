// TO-DO:  add rate of tick upgrade, learn key value pairs






let total = document.querySelector('.total')
let increase = document.querySelector('.increase')
let priceOne = document.querySelector('.onePrice')
let clickerPrice = document.querySelector('.clickerPrice')
let number = 0
let multi = 1
let barrier = 10
let rateOfTick = 1000
let click = 1
let clickBarrier = 100
priceOne.textContent = barrier
total.textContent = number
clickerPrice.textContent = clickBarrier


// Declare upgrade keys
let Upgrades= {
    clickerUpgrade: 50
}

function clicker() {
    number += click
}



// check if upgrade is affordable
setInterval( () => {
    total.textContent = number.toFixed(0)
    if (number >= barrier) {
        increase.style.backgroundColor = "rgb(197, 197, 197)"
        increase.style.boxShadow = "2px 2px 5px gray"
    }
    else if (number < barrier) {
        increase.style.backgroundColor = "rgb(103, 102, 102)"
        increase.style.boxShadow = "0px 0px 0px white"
    }
},100)

// Increase number every (rateOfTick) seconds by (1 * multi)
setInterval( () => {
    number += (multi)
    total.textContent = number.toFixed(0)
},rateOfTick)

// -------Upgrades-------
function upgradeOne() {
    if (number >= barrier) {
        number -= barrier
        multi += 1
        barrier *= (multi)
        priceOne.textContent = Math.round(barrier)
    }
}

function clickerUp() {
    if (number >= clickBarrier) {
        click += 1
        clickBarrier *= 2
        clickerPrice.textContent = clickBarrier
    }
}

