// TO-DO:  add rate of tick upgrade, learn key value pairs, make array of key value pairs for all upgrades,
//         come up with interesting mechanics for each upgrade






let total = document.querySelector('.total')
let increase = document.querySelector('#increase')
let priceOne = document.querySelector('.onePrice')
let clickerPrice = document.querySelector('.clickerPrice')
let number = 8
let multi = 1
let barrier = 10
let rateOfTick = 1000
let click = 1
let clickBarrier = 10

total.textContent = number

// Declare upgrade keys
let Upgrades= [
    {
        "name": increase,
        "price": 10,
        "multi": 1.3,
        "text": priceOne,
    },
    {
        "name": clickerUpgrade,
        "price": 10,
        "multi": 1.2,
        "text": clickerPrice,
    }

    ]


// checks each button clicked for upgrade of same type
document.addEventListener('click', (e) =>
{
    let elementId
    if(e.target.tagName == 'BUTTON'){
         elementId = e.target.id
    } else (elementId = e.target.parentElement.id )
    
    console.log(elementId)
    for (let i = 0; i < Upgrades.length;i++){
        if (elementId == `${Upgrades[i].name.id}`){
            if (number >= Upgrades[i].price){
                number -=  Upgrades[i].price
                Upgrades[i].price *= Upgrades[i].multi
                Upgrades[i].text.textContent = Math.round(Upgrades[i].price)
            }
        } 
    }
}
)



    for (let i = 0; i < Upgrades.length;i++){
    Upgrades[i].text.textContent = Upgrades[i].price
}

function clicker() {
    number += click
}



// check if upgrade is affordable
setInterval( () => {
    total.textContent = number.toFixed(0)



    for (let i = 0; i < Upgrades.length;i++) {
        if (number >= Upgrades[i].price){
            Upgrades[i].name.style.backgroundColor = "rgb(197, 197, 197)"
            Upgrades[i].name.style.boxShadow = "2px 2px 5px gray"
        }
        else if (number < Upgrades[i].price) {
         Upgrades[i].name.style.backgroundColor = "rgb(103, 102, 102)"
         Upgrades[i].name.style.boxShadow = "0px 0px 0px white"
        }
    }
},100)

// Increase number every (rateOfTick) seconds by (1 * multi)
setInterval( () => {
    number += (multi)
    total.textContent = number.toFixed(0)
},rateOfTick)

// -------Upgrades-------
// function upgradeOne() {
//     // if (number >= barrier) {
//     //     number -= barrier
//     //     multi += 1
//     //     barrier *= (multi)
//     //     priceOne.textContent = Math.round(barrier)
//     // }

//     for (let i = 0; i < Upgrades.length;i++){
//         if (this.id == Upgrades[i].name){
//             if (number >= Upgrades[i].price){
//                 number -=  Upgrades[i].price
//                 Upgrades[i].price *= Upgrades[i].multi
//                 priceOne.textContent = Math.round(Upgrades[i].price)
//             }
//         }
//     }

// }

// function clickerUp() {
//     if (number >= clickBarrier) {
//         click += 1
//         clickBarrier *= 2
//         clickerPrice.textContent = clickBarrier
//         Upgrades.clickerUpgrade += 1
//     }
// }

