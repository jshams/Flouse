let money = 1000
let droneFacilities = 1
let drones = 5

const moneyDiv = document.getElementById("money")
const numOfDroneFacilities = document.getElementById("num-of-drone-facilities")
const numOfDrones = document.getElementById("num-of-drones")
const buyDroneFacilityBtn = document.getElementById("buy-drones-btn")
const requestDiv = document.getElementById("request-div")
const requestDescription = document.getElementById("request-description")
const requestBtn = document.getElementById("request-button")

requestBtn.addEventListener('click', () => {
    money += 100
    moneyDiv.innerHTML = money
})

buyDroneFacilityBtn.addEventListener('click', () => {
    if (money >= 500) {
        money -= 500
        moneyDiv.innerHTML = money
        droneFacilities += 1
        numOfDroneFacilities.innerHTML = droneFacilities
        drones += 5
        numOfDrones.innerHTML = drones
    }
})




///////////////////////////
///////// DRONES //////////
///////////////////////////

class Drone {
    constructor() {
        this.active = false
    }
    activate() {
        this.active = true
    }
    deactivate() {
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
        this.droneAmount = 5 * Math.pow(2, this.level - 1)
        this.auto = false
    }
}
