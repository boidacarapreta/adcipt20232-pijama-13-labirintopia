export default class resposta extends Phaser.Scene {
  constructor () {
    super('resposta')
  }

  preload () {
    this.load.image('resposta', './assets/resposta.png')
    this.load.spritesheet('direita', '../assets/botoes/direitaa.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.image = this.add.image(400, 225, 'resposta').setTint(0xcccccc)
    this.image = this.add.sprite(720, 400, 'direita')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.resume('principal')
        this.game.scene.stop('resposta')
      })
  }

  update () { }
}
