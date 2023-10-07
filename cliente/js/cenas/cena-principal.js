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
      frameWidth: 100,
      frameHeight: 100
    })

    this.load.spritesheet('alatar', '../assets/personagens/alatar.png', {
      frameWidth: 100,
      frameHeight: 100
    })

    this.load.spritesheet('moeda', './assets/moeda.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.audio('moeda-som', '../assets/moeda.mp3')

    this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
      frameWidth: 128,
      frameHeight: 128
    })
    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 128,
      frameHeight: 128
    })
    this.load.spritesheet('cima', '../assets/botoes/cima.png', {
      frameWidth: 128,
      frameHeight: 128
    })
    this.load.spritesheet('baixo', '../assets/botoes/baixo.png', {
      frameWidth: 128,
      frameHeight: 128
    })
  }

  create () {
    this.velocidade = 200
    this.moedaSom = this.sound.add('moeda-som')

    if (this.game.jogadores.primeniro === this.game.socket.id) {
      this.personagem = this.physics.add.sprite(-350, -80, 'íris', 18)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.personagem = this.physics.add.sprite(-350, -80, 'alatar', 18)
    } else

    /* mapa */ {
      this.tilemapLabirinto = this.make.tilemap({
        key: 'labirinto'
      })
    }

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

    /* alatar */
    this.personagem = this.physics.add.sprite(-350, -80, 'alatar', 18)
    this.cameras.main.startFollow(this.personagem)
    this.cameras.main.setZoom(0.8)

    this.anims.create({
      key: 'alatar-parado',
      frames: this.anims.generateFrameNumbers('alatar', {
        start: 108,
        end: 110
      }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'alatar-esquerda',
      frames: this.anims.generateFrameNumbers('alatar', {
        start: 69,
        end: 77
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'alatar-direita',
      frames: this.anims.generateFrameNumbers('alatar', {
        start: 87,
        end: 95
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'alatar-cima',
      frames: this.anims.generateFrameNumbers('alatar', {
        start: 60,
        end: 68
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'alatar-baixo',
      frames: this.anims.generateFrameNumbers('alatar', {
        start: 78,
        end: 86
      }),
      frameRate: 12,
      repeat: -1
    })

    /* íris */
    this.personagem = this.physics.add.sprite(-350, -80, 'íris', 18)
    this.cameras.main.startFollow(this.personagem)
    this.cameras.main.setZoom(0.8)

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

    /* MOEDAS */
    this.moedas = [
      {
        x: -642.6,
        y: 4696.6
      },
      {
        x: -889.9,
        y: 2607.9
      },
      {
        x: 498,
        y: 3495
      },
      {
        x: 2430,
        y: 2093
      },
      {
        x: 1851.9,
        y: 4646.6
      },
      {
        x: 1653.3,
        y: 3377.3
      },
      {
        x: 882,
        y: 2842.6
      },
      {
        x: -1289,
        y: 2062.6
      },
      {
        x: -437,
        y: 4677.9
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
    this.esquerda = this.add.sprite(10, 350, 'esquerda')
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

    this.direita = this.add.sprite(190, 350, 'direita')
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

    this.cima = this.add.sprite(100, 260, 'cima')
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

    this.baixo = this.add.sprite(100, 450, 'baixo')
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
