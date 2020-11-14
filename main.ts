let X = 0
let Y = 0
basic.forever(function () {
    X = 4
    Y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 6; index++) {
            Y = X + Y
        }
    }
    basic.showNumber(Y)
})
