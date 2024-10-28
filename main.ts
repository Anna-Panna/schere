let zeichen = 0
input.onGesture(Gesture.Shake, function () {
    zeichen = randint(1, 3)
    if (zeichen == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # # .
            # # . # .
            # # . . #
            `)
    }
    if (zeichen == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (zeichen == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
