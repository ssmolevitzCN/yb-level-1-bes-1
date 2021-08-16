namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(player1, tiles.getTileLocation(1, 6))
})
let player1: Sprite = null
tiles.setTilemap(tilemap`level2`)
game.showLongText("Avoid the moving snakes to get to the coin!", DialogLayout.Center)
player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(player1, tiles.getTileLocation(1, 6))
controller.moveSprite(player1)
let coin = sprites.create(img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `, SpriteKind.Goal)
tiles.placeOnTile(coin, tiles.getTileLocation(8, 1))
animation.runImageAnimation(
coin,
[img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `,img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 d 1 5 b . 
    . b 5 3 1 5 b . 
    . c 5 3 1 d c . 
    . c 5 1 d d c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . . b 1 1 b . . 
    . . b 5 5 b . . 
    . . b d d b . . 
    . . c d d c . . 
    . . c 3 3 c . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 1 d 5 b . 
    . b 5 1 3 5 b . 
    . c d 1 3 5 c . 
    . c d d 1 5 c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `],
500,
true
)
let snake1 = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(snake1, tiles.getTileLocation(3, 3))
snake1.setVelocity(50, 0)
snake1.setBounceOnWall(true)
let snake2 = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(snake2, tiles.getTileLocation(6, 5))
snake2.setVelocity(50, 0)
snake2.setBounceOnWall(true)
info.setLife(3)
info.startCountdown(10)
