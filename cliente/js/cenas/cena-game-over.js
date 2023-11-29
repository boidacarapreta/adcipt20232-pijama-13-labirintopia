export default class finaltriste extends Phaser.Scene {
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
        //this.game.data = new Date('2024-01-01T00:00:30.000')
        this.game.scene.stop('finaltriste')
        this.game.scene.start('cena0')
      })
  }

  update () { }
}
