enum RadioMessage {
    message1 = 49434
}
radio.onReceivedValue(function (name, value) {
    if (name == "Block_Reward") {
        Block_Reward = value
    } else if (name == "Block_No") {
        Block_No = value
    } else if (name == "Total_Blocks") {
        Total_Blocks = value
    }
})
let Total_Blocks = 0
let Block_No = 0
let Block_Reward = 0
radio.setGroup(90)
radio.setTransmitPower(7)
radio.setFrequencyBand(5)
