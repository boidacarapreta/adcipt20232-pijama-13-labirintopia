export default class finaltriste extends Phaser.Scene {
  constructor () {
    super('finalfeliz')
  }

  preload () {
    this.load.image('finalfeliz', './assets/telafinal.png')
    this.load.image('grade', '../assets/botoes/grade.png')
  }

  create () {
    this.imagem = this.add.image(400, 225, 'finalfeliz').setTint(0xcccccc)
    this.image = this.add.image(400, 408, 'grade')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('finalfeliz')
        this.game.scene.start('cena0')
      })
  }

  update () { }
}
