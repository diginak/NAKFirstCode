while (true) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(20)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(20)
    basic.showIcon(IconNames.Square)
    basic.pause(20)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(20)
}
