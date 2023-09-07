export default class cenastart extends Phaser.Scene {
  constructor () {
    super('cenastart')
  }

  
  preload() {
    this.load.image('cena-start', '../assets/cenário/inicio.png')
    this.load.image('startbotton', '../assets/grade.png')
    this.load.spritesheet('tela-cheia', '../assets/botão/telacheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create() {
    this.imagem = this.add 
    this.add.image(400, 225, 'cena-start')
    this.add.image(400, 225, 'grade')
    
      .setInteractive()
      .on('pointerover', () => {
        
      })
      .on('pointerdown', () => {
        this.imagem.destroy()
        this.game.scene.stop('cena-start')
        this.game.scene.start('cena-sala')
      })
    
    
    this.telacheia = this.add
      .sprite(750, 50, 'tela_cheia', 0)
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
    
  
  

  update() {}


}


