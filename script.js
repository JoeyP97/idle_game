let total = document.querySelector('.total')
let increase = document.querySelector('.increase')
let number = 100

total.textContent = number

function add() {
    number += 1
    total.textContent = number
}