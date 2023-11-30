export default class desafiofinal extends Phaser.Scene {
  constructor () {
    super('desafiofinal')
  }

  preload () {
    this.load.image('escolhas', './assets/escolhas.png')
  }

  create () {
    this.imagem = this.add.image(400, 225, 'escolhas')
    
  }

  update () { }
}
