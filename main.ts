input.onButtonPressed(Button.A, function () {
    time = 0
    output = !(output)
})
input.onButtonPressed(Button.B, function () {
	
})
let output = false
let time = 0
basic.showString("Timer")
time = 0
let timeOn = 4
let timeOff = 20
output = false
basic.forever(function () {
    if (output) {
        if (time >= timeOn) {
            output = false
            pins.digitalWritePin(DigitalPin.P0, 0)
            time = 0
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        if (time >= timeOff) {
            output = true
            pins.digitalWritePin(DigitalPin.P0, 1)
            time = 0
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.showLeds(`
                # . # . .
                . # . . .
                # . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
loops.everyInterval(3600000, function () {
    time = time + 1
})
