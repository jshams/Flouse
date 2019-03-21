let money = 1000
let droneFacilities = []

///////////////////////////
///////// DRONES //////////
///////////////////////////

class Drone {
    constructor() {
        this.active = false
    }
}

///////////////////////////
////// DRONE FACILITY /////
///////////////////////////

class DroneFacility {
    constructor() {
        this.level = 1
        this.drones = []
        this.droneAmount = this.drones.length
        this.auto = false
    }

    levelUp() {
        this.level += 1
        this.createDrones(this.droneAmount)
        if (this.level == 3) {
            this.auto = true
        }
    }
    createDrones(numOfDrones) {
        let i = 0
        while (i < numOfDrones) {
            this.drones.push(new Drone())
            i++
        }

    }

}

/////////////////////
////// REQUESTS /////
/////////////////////

const moneyDiv = document.getElementById("money")
const numOfDroneFacilities = document.getElementById("num-of-drone-facilities")
const numOfDrones = document.getElementById("num-of-drones")
const buyDroneFacilityBtn = document.getElementById("buy-drones-btn")
const requestDiv = document.getElementById("request-div")
const requestDescription = document.getElementById("request-description")
const requestButton = document.getElementById("request-button")

class Request {
    constructor(message, reward, button) {
        this.message = message
        this.reward = reward
        this.button = button
    }
    callRequest() {
        requestDiv.classList.remove('hidden')
        requestDescription.innerHTML = this.message
    }
    completeRequest() {
        requestDiv.classList.add('hidden')
        money += this.reward
    }
    // this.button.addEventListener('click', function () {
    //     this.completeRequest()
    //     moneyDiv.innerHTML = money
    // })

}


/////////////////////
///// GAME LOOP /////
/////////////////////

// const update = (dt) => {
//     console.log(dt)

// }
// let lastUpdate = Date.now() // the ms right now
// setInterval(() => {
//     const now = Date.now()
//     const dt = now - lastUpdate
//     lastUpdate = now
//     update(dt)
// }, 1000)

// var loopTime = 0
// function gameLoop() {
//     setInterval(function () {
//         // the game loop repeats every second 
//         if (loopTime == 0) {
//             loopTime = Math.floor(Math.random() * 15 + 15)

//             // call an event
//             // right now this calls an event every 15 to 30 seconds

//             // later change this so that each house on each zone will have a probability of event them
//             // 1 zone will have 20 properties
//             // and 1 request should happen every 20 seconds
//             // so they probability of an event happening is 1 in 20
//             // and the probability of a property being picked for an event is also 1 in 20
//             // if the property type isnt owned by the player it shouldn't appear
//         } else {
//             loopTime -= 1
//         }
//     }, 1000);
// }
