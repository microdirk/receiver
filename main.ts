radio.onReceivedValue(function (name, value) {
    if (name == "Left") {
        bitbot.oledText(name, 0, 0, false)
        bitbot.oledNumber(value, 50, 0, false)
        if (value == 1) {
            led.plot(0, 4)
            led.plot(0, 3)
        } else if (value == 2) {
            led.plot(0, 1)
            led.plot(0, 0)
        }
    }
    if (name == "Center") {
        bitbot.oledText(name, 0, 1, false)
        bitbot.oledNumber(value, 50, 1, false)
        if (value == 1) {
            led.plot(2, 4)
            led.plot(2, 3)
        } else if (value == 2) {
            led.plot(2, 1)
            led.plot(2, 0)
        }
    }
    basic.pause(100)
    basic.clearScreen()
    if (name == "Right") {
        bitbot.oledText(name, 0, 2, false)
        bitbot.oledNumber(value, 50, 2, false)
        if (value == 1) {
            led.plot(4, 4)
            led.plot(4, 3)
        } else if (value == 2) {
            led.plot(4, 1)
            led.plot(4, 0)
        }
    }
})
bitbot.oledText("Hello!", 0, 0, false)
radio.setGroup(1)
