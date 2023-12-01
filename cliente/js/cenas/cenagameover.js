export default class gameover extends Phaser.Scene {
  constructor () {
    super('gameover')
  }

  preload () {
    this.load.image('gameover', './assets/gameover.png')
  }

  create () {
    this.imagem = this.add.image(400, 225, 'gameover').setTint(0xcccccc)
  }

  update () { }
}
