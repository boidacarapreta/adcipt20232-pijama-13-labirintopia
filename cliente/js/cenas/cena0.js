export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    this.load.image('tela-inicial.png', '../assets/tela-inicial.png')
    this.load.image('grade', '../assets/botoes/grade.png')
    this.load.spritesheet('telacheia', '../assets/botoes/telacheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.imagem = this.add.image(400, 225, 'tela-inicial.png')
    this.image = this.add.image(400, 408, 'grade')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cena0')
        this.game.scene.start('sala')
      })

    this.telacheia = this.add
      .sprite(750, 50, 'telacheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.telacheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.telacheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)
  }

  update () {
  }
}
