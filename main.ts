input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # #
        . . . # .
        . . . # .
        `)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # # .
        . . . # .
        . # # . .
        `)
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # # .
        . # . . .
        . # # # .
        `)
    for (let index = 0; index < 8; index++) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    for (let index = 0; index < 16; index++) {
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    for (let index = 0; index < 10; index++) {
        music.play(music.stringPlayable("C5 B D E F E A B ", 1000), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
	
})
