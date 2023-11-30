export default class desafiofinal extends Phaser.Scene {
  constructor () {
    super('desafiofinal')
  }

  preload () {
    this.load.image('escolhas', './assets/escolhas.png')
    this.load.image('gradedesistir', '../assets/botoes/gradedesistir.png')
    this.load.image('gradecontinuar', '../assets/botoes/gradecontinuar.png')
  }

  create () {
    this.imagem = this.add.image(400, 225, 'escolhas')
    this.image = this.add.image(430, 350, 'gradecontinuar')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('desafiofinal')
        this.game.scene.resume('principal')
      })
    this.image = this.add.image(250, 350, 'gradedesistir')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('desafiofinal')
        this.game.scene.start('finaltriste')
      })
  }

  update () { }
}
