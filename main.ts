radio.onReceivedValue(function (name, value) {
    if (name == "Left") {
        if (value == 1) {
            led.plot(0, 4)
            led.plot(0, 3)
        } else if (value == 2) {
            led.plot(0, 1)
            led.plot(0, 0)
        }
    }
    if (name == "Center") {
        if (value == 1) {
            led.plot(2, 4)
            led.plot(2, 3)
        } else if (value == 2) {
            led.plot(2, 1)
            led.plot(2, 0)
        }
    }
    if (name == "Right") {
        if (value == 1) {
            led.plot(4, 4)
            led.plot(4, 3)
        } else if (value == 2) {
            led.plot(4, 1)
            led.plot(4, 0)
        }
    }
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(1)
