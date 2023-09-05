export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload() {
    this.load.image('tela-inicial.png', '../assets/tela-inicial.png')
    this.load.spritesheet('derek', '../assets/Derek.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create() {
    this.imagem = this.add.image(400, 225, 'tela-inicial.png')
    this.personagem = this.physics.add.sprite(400, 225, 'derek')
      .setInteractive()
      .on('pointerdown', () => {
        this.personagem.anims.play('derek-direita')
        this.personagem.setVelocityX(100)
      })

    this.anims.create({
      key: 'derek-direita',
      frames: this.anims.generateFrameNumbers('derek', {
        start: 8,
        end: 11
      }),
      frameRate: 6,
      repeat: -1
    })
  }

  update() { }
}
