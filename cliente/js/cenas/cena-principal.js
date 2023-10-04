export default class principal extends Phaser.Scene {
  constructor () {
    super('principal')
  }

  preload () {
    this.load.tilemapTiledJSON('labirinto', '../assets/mapa/mapa.json')

    this.load.image('base-parede.1', '../assets/mapa/base-parede.1.png')
    this.load.image('parede-horizontal.1', '../assets/mapa/parede-horizontal.1.png')
    this.load.image('parede-vertical.1', '../assets/mapa/parede-vertical.1.png')
    this.load.image('topo-de-quina.1', '../assets/mapa/topo-de-quina.1.png')
    this.load.image('base-quina.1', '../assets/mapa/base-quina.1.png')
    this.load.image('sombra1', '../assets/mapa/sombra1.png')
    this.load.image('sombra2', '../assets/mapa/sombra2.png')
    this.load.image('sombra3', '../assets/mapa/sombra3.png')
    this.load.image('sombra4', '../assets/mapa/sombra4.png')
    this.load.image('sombra5', '../assets/mapa/sombra5.png')
    this.load.image('sombra6', '../assets/mapa/sombra6.png')
    this.load.image('sombra7', '../assets/mapa/sombra7.png')
    this.load.image('sombra8', '../assets/mapa/sombra8.png')
    this.load.image('terreno.1', '../assets/mapa/terreno.1.png')

    this.load.spritesheet('íris', '../assets/personagens/íris.png', {
      frameWidth: 50,
      frameHeight: 51
    })

    this.load.spritesheet('moeda', './assets/moeda.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.audio('moeda-som', '../assets/moeda.mp3')

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
    this.velocidade = 200
    this.moedaSom = this.sound.add('moeda-som')

    /* mapa */
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
    this.tilesetTerreno1 = this.tilemapLabirinto.addTilesetImage('terreno.1')
    this.tilesetBaseParede1 = this.tilemapLabirinto.addTilesetImage('base-parede.1')
    this.tilesetParedeHorizontal1 = this.tilemapLabirinto.addTilesetImage('parede-horizontal.1')
    this.tilesetParedeVertical1 = this.tilemapLabirinto.addTilesetImage('parede-vertical.1')
    this.tilesetTopoDeQuina1 = this.tilemapLabirinto.addTilesetImage('topo-de-quina.1')
    this.tilesetBaseQuina1 = this.tilemapLabirinto.addTilesetImage('base-quina.1')

    this.layerTerreno = this.tilemapLabirinto.createLayer('terreno', [this.tilesetTerreno1])
    this.layerParede = this.tilemapLabirinto.createLayer('parede', [this.tilesetBaseParede1, this.tilesetParedeHorizontal1, this.tilesetParedeVertical1, this.tilesetBaseQuina1, this.tilesetTopoDeQuina1])
    this.layerSombra = this.tilemapLabirinto.createLayer('sombra', [this.tilesetSombra1, this.tilesetSombra2, this.tilesetSombra3, this.tilesetSombra4, this.tilesetSombra5, this.tilesetSombra6, this.tilesetSombra7, this.tilesetSombra8])

    /* personagens */

    this.personagem = this.physics.add.sprite(-350, -80, 'íris', 18)
    this.cameras.main.startFollow(this.personagem)
    this.cameras.main.setZoom(0.7)

    this.anims.create({
      key: 'íris-parado',
      frames: this.anims.generateFrameNumbers('íris', {
        start: 121,
        end: 124
      }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'íris-esquerda',
      frames: this.anims.generateFrameNumbers('íris', {
        start: 76,
        end: 84
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'íris-direita',
      frames: this.anims.generateFrameNumbers('íris', {
        start: 94,
        end: 102
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'íris-cima',
      frames: this.anims.generateFrameNumbers('íris', {
        start: 67,
        end: 75
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'íris-baixo',
      frames: this.anims.generateFrameNumbers('íris', {
        start: 85,
        end: 93
      }),
      frameRate: 12,
      repeat: -1
    })

    this.moedas = [
      {
        x: 100,
        y: 200
      },
      {
        x: 200,
        y: 200
      }
    ]

    this.anims.create({
      key: 'moeda-girando',
      frames: this.anims.generateFrameNumbers('moeda', {
        start: 0,
        end: 3
      }),
      frameRate: 15,
      repeat: -1
    })

    this.moedas.forEach((moeda) => {
      moeda.objeto = this.physics.add.sprite(moeda.x, moeda.y, 'moeda')
      moeda.objeto.anims.play('moeda-girando')
      this.physics.add.collider(this.personagem, moeda.objeto, this.coletar_moeda, null, this)
    })

    /* botões */
    this.esquerda = this.add.sprite(50, 350, 'esquerda')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('íris-esquerda')
        this.personagem.setVelocityX(-this.velocidade)
      })
      .on('pointerout', () => {
        this.esquerda.setFrame(0)
        this.personagem.anims.play('íris-parado')
        this.personagem.setVelocityX(0)
      })

    this.direita = this.add.sprite(150, 350, 'direita')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('íris-direita')
        this.personagem.setVelocityX(this.velocidade)
      })
      .on('pointerout', () => {
        this.direita.setFrame(0)
        this.personagem.anims.play('íris-parado')
        this.personagem.setVelocityX(0)
      })

    this.cima = this.add.sprite(100, 300, 'cima')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.cima.setFrame(1)
        this.personagem.anims.play('íris-cima')
        this.personagem.setVelocityY(-this.velocidade)
      })
      .on('pointerout', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('íris-parado')
        this.personagem.setVelocityY(0)
      })

    this.baixo = this.add.sprite(100, 400, 'baixo')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.baixo.setFrame(1)
        this.personagem.anims.play('íris-baixo')
        this.personagem.setVelocityY(this.velocidade)
      })
      .on('pointerout', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('íris-parado')
        this.personagem.setVelocityY(0)
      })

    this.layerParede.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.personagem, this.layerParede)
  }

  update () { }

  coletar_moeda (personagem, moeda) {
    this.moedaSom.play()
    moeda.disableBody(true, true)
  }
}
