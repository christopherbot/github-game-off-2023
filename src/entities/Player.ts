import { Controls, type ControlsOptions } from '@src/components'

import Character from './Character'

class Player extends Character {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    controlsOptions: ControlsOptions,
  ) {
    // TODO ability
    super(scene, x, y, 'double jump')

    const controls = new Controls(scene, {
      up: {
        down: () => {
          this.jump()
          controlsOptions.up.down()
        },
        up: () => {
          controlsOptions.up.up()
        },
        pressed: () => {
          controlsOptions.up.pressed()
        },
      },
      down: {
        down: () => {
          controlsOptions.down.down()
        },
        up: () => {
          controlsOptions.down.up()
        },
        pressed: () => {
          this.onDown()
          controlsOptions.down.pressed()
        },
      },
      left: {
        down: () => {
          controlsOptions.left.down()
        },
        up: () => {
          controlsOptions.left.up()
        },
        pressed: () => {
          this.moveLeft()
          controlsOptions.left.pressed()
        },
      },
      right: {
        down: () => {
          controlsOptions.right.down()
        },
        up: () => {
          controlsOptions.right.up()
        },
        pressed: () => {
          this.moveRight()
          controlsOptions.right.pressed()
        },
      },
      onHorizontalNeutral: () => {
        this.stopMovingX()
        controlsOptions.onHorizontalNeutral()
      },
    })

    this.addComponent(controls)
  }

  update() {
    super.update()
  }
}

export default Player
