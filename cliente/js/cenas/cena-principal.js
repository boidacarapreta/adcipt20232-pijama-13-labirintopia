export default class principal extends Phaser.Scene {
  constructor () {
    super('principal')
  }

  preload () {
    this.load.tilemapTiledJSON('labirinto', '../assets/mapa/mapa.json')

    this.load.image('base-parede', '../assets/mapa/base-parede.1.png')
    this.load.image('parede-horizontal', '../assets/mapa/parede-horizontal.1.png')
    this.load.image('parede-vertical', '../assets/mapa/parede-vertical.1.png')
    this.load.image('topo-de-quina', '../assets/mapa/topo-de-quina.1.png')
    this.load.image('base-quina', '../assets/mapa/base-quina.1.png')
    this.load.image('sombra1', '../assets/mapa/sombra1.png')
    this.load.image('sombra2', '../assets/mapa/sombra2.png')
    this.load.image('sombra3', '../assets/mapa/sombra3.png')
    this.load.image('sombra4', '../assets/mapa/sombra4.png')
    this.load.image('sombra5', '../assets/mapa/sombra5.png')
    this.load.image('sombra6', '../assets/mapa/sombra6.png')
    this.load.image('sombra7', '../assets/mapa/sombra7.png')
    this.load.image('sombra8', '../assets/mapa/sombra8.png')
    this.load.image('terreno', '../assets/mapa/terreno.1.png')

    this.load.spritesheet('azul', '../assets/mapa/azul.png', {
      frameWidth: 64,
      frameHeight: 128
    })
    
    this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('cima', '../assets/botoes/cima.png', {
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.spritesheet('baixo', '../assets/botoes/baixo.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {

    /*mapa*/
    this.tilemapLabirinto = this.make.tilemap({
      key: 'labirinto'
    })

    this.tilesetSombra1 = this.tilemapLabirinto.addTilesetImage('sombra1')
    this.tilesetSombra2 = this.tilemapLabirinto.addTilesetImage('sombra2')
    this.tilesetSombra3 = this.tilemapLabirinto.addTilesetImage('sombra3')
    this.tilesetSombra4 = this.tilemapLabirinto.addTilesetImage('sombra4')
    this.tilesetSombra5 = this.tilemapLabirinto.addTilesetImage('sombra5')
    this.tilesetSombra6 = this.tilemapLabirinto.addTilesetImage('sombra6')
    this.tilesetSombra7 = this.tilemapLabirinto.addTilesetImage('sombra7')
    this.tilesetSombra8 = this.tilemapLabirinto.addTilesetImage('sombra8')
    this.tilesetTerreno1 = this.tilemapLabirinto.addTilesetImage('terreno')
    this.tilesetBaseParede1 = this.tilemapLabirinto.addTilesetImage('base-parede')
    this.tilesetParedeHorizontal1 = this.tilemapLabirinto.addTilesetImage('parede-horizontal')
    this.tilesetParedeVertical1 = this.tilemapLabirinto.addTilesetImage('paredes-vertical')
    this.tilesetTopoDeQuina1 = this.tilemapLabirinto.addTilesetImage('topo-de-quina')
    this.tilesetBaseQuina1 = this.tilemapLabirinto.addTilesetImage('base-quina')

    this.layerTerreno = this.tilemapLabirinto.createLayer('terreno', [this.tilesetTerreno1])
    this.layerParede = this.tilemapLabirinto.createLayer('parede', [this.tilesetBaseParede1, this.tilesetParedeHorizontal1, this.tilesetParedeVertical1, this.tilesetTopoDeQuina1, this.tilesetTopoDeQuina1])
    this.layerSombra = this.tilemapLabirinto.createLayer('sombra', [this.tilesetSombra1, this.tilesetSombra2, this.tilesetSombra3, this.tilesetSombra4, this.tilesetSombra5, this.tilesetSombra6, this.tilesetSombra7])
  
    /*personagens*/

    this.personagem = this.physics.add.sprite(-350, -80, 'azul', 18)
    this.cameras.main.startFollow(this.personagem)

    this.anims.create({
      key: 'azul-parado',
      frames: this.anims.generateFrameNumbers('azul', {
        start: 18,
        end: 18
      }),
      frameRate: 1
    })
    this.anims.create({
      key: 'azul-esquerda',
      frames: this.anims.generateFrameNumbers('azul', {
        start: 9,
        end: 17
      }), frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'azul-direita',
      frames: this.anims.generateFrameNumbers('azul', {
        start: 27,
        end: 35
      }), frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'azul-cima',
      frames: this.anims.generateFrameNumbers('azul', {
        start: 0,
        end: 8
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'azul-baixo',
      frames: this.anims.generateFrameNumbers('azul', {
        start: 18,
        end: 26
      }),
      frameRate: 12,
      repeat: -1
    })
 

    /*botões*/
    this.esquerda = this.add.sprite(50, 350, 'esquerda')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('azul-esquerda')
        this.personagem.setVelocityX(this.velocidade)
      })
      .on('pointerout', () => {
        this.esquerda.setFrame(0)
        this.personagem.anims.play('azul-parado')
        this.personagem.setVelocityX(0)
      })
    this.direita = this.add.sprite(150, 350, 'direita')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('azul-direita')
        this.personagem.setVelocityX(this.velocidade)
      })
      .on('pointerout', () => {
        this.direita.setFrame(0)
        this.personagem.anims.play('azul-parado')
        this.personagem.setVelocityX(0)
      })
    this.cima = this.add.sprite(100, 300, 'cima')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.cima.setFrame(1)
        this.personagem.anims.play('azul-cima')
        this.personagem.setVelocityY(-this.velocidade)
      })
      .on('pointerout', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('azul-parado')
        this.personagem.setVelocityY(0)
      })
    this.baixo = this.add.sprite(100, 400, 'baixo')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.baixo.setFrame(1)
        this.personagem.anims.play('azul-baixo')
        this.personagem.setVelocityY(this.velocidade)
      })
      .on('pointerout', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('azul-parado')
        this.personagem.setVelocityY(0)
      })
  
  
  
  
  
  }

  update () { }
}
