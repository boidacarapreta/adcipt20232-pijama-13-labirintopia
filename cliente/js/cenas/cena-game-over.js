export default class principal extends Phaser.Scene {
  constructor () {
    super('finaltriste')
  }

  preload () {
    this.load.image('gameover', './assets/game-over.png')
    this.load.image('grade', '../assets/botoes/grade.png')
  }

  create () {
    this.imagem = this.add.image(400, 225, 'gameover').setTint(0xcccccc)
    this.image = this.add.image(400, 408, 'grade')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('finaltriste')
        this.game.scene.start('cena0')
      })
  }

  update () { }
}
