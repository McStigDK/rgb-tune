input.onButtonPressed(Button.A, function () {
    if (Channel == 0) {
        R = Reading
    } else if (Channel == 1) {
        G = Reading
    } else {
        B = Reading
    }
    strip.rotate(1)
    strip.setPixelColor(0, neopixel.rgb(R, G, B))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    if (Channel < 2) {
        Channel += 1
    } else {
        Channel = 0
    }
    basic.showString("RGB".charAt(Channel))
    if (Channel == 0) {
        basic.showNumber(R)
    } else if (Channel == 1) {
        basic.showNumber(G)
    } else {
        basic.showNumber(B)
    }
})
let Reading = 0
let strip: neopixel.Strip = null
let Channel = 0
let B = 0
let G = 0
let R = 0
R = 0
G = 0
B = 0
Channel = 0
let X = 0
let NumLeds = 18
let Brightness = 128
strip = neopixel.create(DigitalPin.P0, NumLeds, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(100)
    led.unplot(0, 0)
    basic.pause(100)
    Reading = Math.trunc(pins.analogReadPin(AnalogPin.P1) / 4)
    basic.showNumber(Reading)
})
