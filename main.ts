enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showString("Mining Starting")
    radio.sendValue("Mining_Started", 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Block_Reward") {
        Block_Reward = value
        serial.writeNumber(value)
    } else if (name == "Block_No") {
        Block_No = value
        serial.writeNumber(value)
    } else if (name == "Total_Blocks") {
        Total_Blocks = value
        serial.writeNumber(value)
    }
})
let Total_Blocks = 0
let Block_No = 0
let Block_Reward = 0
radio.setGroup(90)
radio.setTransmitPower(7)
radio.setFrequencyBand(5)
serial.redirectToUSB()
