input.onButtonPressed(Button.A, function () {
    item.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    item.change(LedSpriteProperty.Y, 1)
})
let enemy_item_4: game.LedSprite = null
let enemy_item_3: game.LedSprite = null
let enemy_item_2: game.LedSprite = null
let enemy_item_1: game.LedSprite = null
let item: game.LedSprite = null
item = game.createSprite(0, 0)
game.setScore(0)
basic.showString("LVL1")
for (let index = 0; index < 15; index++) {
    enemy_item_1 = game.createSprite(5, randint(0, 5))
    enemy_item_2 = game.createSprite(5, randint(0, 5))
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    if (item.isTouching(enemy_item_1)) {
        game.gameOver()
    }
    if (item.isTouching(enemy_item_2)) {
        game.gameOver()
    }
    basic.pause(250)
    enemy_item_1.delete()
    enemy_item_2.delete()
    game.addScore(2)
}
basic.pause(500)
basic.showString("LVL2")
for (let index = 0; index < 15; index++) {
    enemy_item_1 = game.createSprite(5, randint(0, 5))
    enemy_item_2 = game.createSprite(5, randint(0, 5))
    enemy_item_3 = game.createSprite(5, randint(0, 5))
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    if (item.isTouching(enemy_item_1)) {
        game.gameOver()
    }
    if (item.isTouching(enemy_item_2)) {
        game.gameOver()
    }
    if (item.isTouching(enemy_item_3)) {
        game.gameOver()
    }
    basic.pause(250)
    enemy_item_1.delete()
    enemy_item_2.delete()
    enemy_item_3.delete()
    game.addScore(3)
}
basic.pause(500)
basic.showString("LVL3")
for (let index = 0; index < 50000; index++) {
    enemy_item_1 = game.createSprite(5, randint(0, 5))
    enemy_item_2 = game.createSprite(5, randint(0, 5))
    enemy_item_3 = game.createSprite(5, randint(0, 5))
    enemy_item_4 = game.createSprite(5, randint(0, 5))
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    enemy_item_4.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    enemy_item_4.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    enemy_item_4.change(LedSpriteProperty.X, -1)
    basic.pause(250)
    enemy_item_1.change(LedSpriteProperty.X, -1)
    enemy_item_2.change(LedSpriteProperty.X, -1)
    enemy_item_3.change(LedSpriteProperty.X, -1)
    enemy_item_4.change(LedSpriteProperty.X, -1)
    if (item.isTouching(enemy_item_1)) {
        game.gameOver()
    }
    if (item.isTouching(enemy_item_2)) {
        game.gameOver()
    }
    if (item.isTouching(enemy_item_3)) {
        game.gameOver()
    }
    if (item.isTouching(enemy_item_4)) {
        game.gameOver()
    }
    basic.pause(250)
    enemy_item_1.delete()
    enemy_item_2.delete()
    enemy_item_3.delete()
    enemy_item_4.delete()
    game.addScore(4)
}
