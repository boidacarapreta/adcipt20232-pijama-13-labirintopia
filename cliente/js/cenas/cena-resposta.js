export default class resposta extends Phaser.Scene {
  constructor () {
    super('resposta')
  }

  preload () {
    this.load.image('resposta', './assets/resposta.png')
    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 128,
      frameHeight: 128
    })
  }

  create () {
    this.imagem = this.add.image(400, 225, 'resposta').setTint(0xcccccc)
    this.image = this.add.image(400, 408, 'direita')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('resposta')
        this.game.scene.resume('principal')
      })
  }

  update () { }
}
