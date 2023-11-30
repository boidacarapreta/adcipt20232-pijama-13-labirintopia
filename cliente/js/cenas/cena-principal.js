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
    this.load.spritesheet('morte', '../assets/personagens/morte.png', {
      frameWidth: 100,
      frameHeight: 100
    })
    this.load.spritesheet('coração', './assets/coração.png', {
      frameWidth: 45,
      frameHeight: 45
    })
    this.load.spritesheet('moeda', './assets/moeda.png', {
      frameWidth: 45,
      frameHeight: 45
    })
    this.load.spritesheet('moedaa', './assets/moedaa.png', {
      frameWidth: 45,
      frameHeight: 45
    })

    this.load.audio('moeda-som', '../assets/audiomoeda.mp3')
    this.load.audio('ambiente-som', '../assets/audioambiente.mp3')
    this.load.audio('morte-som', '../assets/audiomorte.mp3')

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
    this.load.spritesheet('entrada1', '../assets/portaentrada.png', {
      frameWidth: 64,
      frameHeight: 84
    })
    this.load.spritesheet('entrada2', '../assets/portaentrada1.png', {
      frameWidth: 64,
      frameHeight: 84
    })
    this.load.spritesheet('portao', '../assets/portao.png', {
      frameWidth: 192,
      frameHeight: 128
    })
    this.load.spritesheet('portao2', '../assets/portao2.png', {
      frameWidth: 192,
      frameHeight: 128
    })
    this.load.spritesheet('portao3', '../assets/portao3.png', {
      frameWidth: 192,
      frameHeight: 128
    })
    this.load.spritesheet('portao4', '../assets/portao4.png', {
      frameWidth: 192,
      frameHeight: 128
    })
  }

  create () {
    this.ambienteSom = this.sound.add('ambiente-som')
    this.ambienteSom.loop = true
    this.ambienteSom.play()
    this.moedaSom = this.sound.add('moeda-som')
    this.morteSom = this.sound.add('morte-som')

    this.velocidade = 200
    this.vida = 1

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

    /* portas */

    this.entrada1 = this.add.sprite(1633, 288, 'entrada1')
    this.entrada2 = this.add.sprite(3036, 288, 'entrada2')

    this.portao3 = this.physics.add.sprite(1825, 1025, 'portao3', 0)
      .setImmovable(true)

    this.portao4 = this.physics.add.sprite(2848, 1025, 'portao4', 0)
      .setImmovable(true)

    this.portao2 = this.physics.add.sprite(3670, 5189, 'portao2', 0)
      .setImmovable(true)

    this.portao = this.physics.add.sprite(2338, 1340, 'portao', 0)
      .setImmovable(true)

    this.moedaa = this.physics.add.sprite(2369, 4920, 'moedaa', 0)
      .setImmovable(true)

    // this.portao.objeto.anims.play('portao-descendo')

    this.anims.create({
      key: 'portao-descendo',
      frames: this.anims.generateFrameNumbers('portao', {
        start: 0,
        end: 20
      }),
      frameRate: 10
    })

    /* personagens */
    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = 'íris'
      this.remoto = 'alatar'
      this.personagem = this.physics.add.sprite(1703, 345, this.local, 0)
      this.personagemRemoto = this.add.sprite(2976, 345, this.remoto, 0)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.local = 'alatar'
      this.remoto = 'íris'
      this.personagem = this.physics.add.sprite(2976, 345, this.local, 0)
      this.personagemRemoto = this.add.sprite(1703, 345, this.remoto, 0)

      navigator.mediaDevices.getUserMedia({ video: false, audio: true })
        .then((stream) => {
          this.game.localConnection = new RTCPeerConnection(this.game.ice_servers)

          this.game.localConnection.onicecandidate = ({ candidate }) =>
            candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

          this.game.localConnection.ontrack = ({ streams: [stream] }) =>
            this.game.audio.srcObject = stream

          stream.getTracks()
            .forEach((track) => this.game.localConnection.addTrack(track, stream))

          this.game.localConnection.createOffer()
            .then((offer) => this.game.localConnection.setLocalDescription(offer))
            .then(() => this.game.socket.emit('offer', this.game.sala, this.game.localConnection.localDescription))

          this.game.midias = stream
        })
        .catch((error) => console.error(error))
    }

    this.game.socket.on('offer', (description) => {
      this.game.remoteConnection = new RTCPeerConnection(this.game.ice_servers)

      this.game.remoteConnection.onicecandidate = ({ candidate }) =>
        candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

      this.game.remoteConnection.ontrack = ({ streams: [midia] }) =>
        this.game.audio.srcObject = midia

      this.game.midias.getTracks()
        .forEach((track) => this.game.remoteConnection.addTrack(track, this.game.midias))

      this.game.remoteConnection.setRemoteDescription(description)
        .then(() => this.game.remoteConnection.createAnswer())
        .then((answer) => this.game.remoteConnection.setLocalDescription(answer))
        .then(() => this.game.socket.emit('answer', this.game.sala, this.game.remoteConnection.localDescription))
    })

    this.game.socket.on('answer', (description) =>
      this.game.localConnection.setRemoteDescription(description)
    )

    this.game.socket.on('candidate', (candidate) => {
      const conn = this.game.localConnection || this.game.remoteConnection
      conn.addIceCandidate(new RTCIceCandidate(candidate))
    })

    /* morte */

    this.morte = this.physics.add.sprite(4413, 3523, 'morte')
    this.morte.disableBody(true, true)
    this.physics.add.collider(this.personagem, this.morte, this.morteMata, null, this)

    this.anims.create({
      key: 'morte-parado',
      frames: this.anims.generateFrameNumbers('morte', {
        start: 0,
        end: 0
      }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'morte-esquerda',
      frames: this.anims.generateFrameNumbers('morte', {
        start: 10,
        end: 18
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'morte-direita',
      frames: this.anims.generateFrameNumbers('morte', {
        start: 28,
        end: 36
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'morte-cima',
      frames: this.anims.generateFrameNumbers('morte', {
        start: 1,
        end: 9
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'morte-baixo',
      frames: this.anims.generateFrameNumbers('morte', {
        start: 19,
        end: 27
      }),
      frameRate: 12,
      repeat: -1
    })

    /* íris e alatar */
    this.cameras.main.startFollow(this.personagem)
    this.cameras.main.setZoom(0.8)

    this.anims.create({
      key: 'personagem-parado',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'personagem-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 10,
        end: 18
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'personagem-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 28,
        end: 36
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'personagem-cima',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 1,
        end: 9
      }),
      frameRate: 12,
      repeat: -1
    })
    this.anims.create({
      key: 'personagem-baixo',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 19,
        end: 27
      }),
      frameRate: 12,
      repeat: -1
    })

    /* MOEDAS */

    this.moeda = [
      {
        x: 1407,
        y: 640
      },
      {
        x: 824,
        y: 1187
      },
      {
        x: 2444,
        y: 378
      },
      {
        x: 2254,
        y: 378
      },
      {
        x: 3272,
        y: 640
      },
      {
        x: 3842,
        y: 1187
      },
      {
        x: 3330,
        y: 1712
      },
      {
        x: 1217,
        y: 960
      },
      {
        x: 3409,
        y: 960
      },
      {
        x: 1426,
        y: 1712
      },
      {
        x: 639,
        y: 1965
      },
      {
        x: 3410,
        y: 1965
      },
      {
        x: 1234,
        y: 1979
      },
      {
        x: 4027,
        y: 1979
      },
      {
        x: 1848,
        y: 1456
      },
      {
        x: 1208,
        y: 1456
      },
      {
        x: 2811,
        y: 1456
      },
      {
        x: 3451,
        y: 1456
      },
      {
        x: 1599,
        y: 904
      },
      {
        x: 1825,
        y: 904
      },
      {
        x: 2808,
        y: 904
      },
      {
        x: 3062,
        y: 904
      }
    ]

    this.anims.create({
      key: 'moeda-girando',
      frames: this.anims.generateFrameNumbers('moeda', {
        start: 0,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    })

    this.moeda.forEach((moeda) => {
      moeda.objeto = this.physics.add.sprite(moeda.x, moeda.y, 'moeda')
      moeda.objeto.anims.play('moeda-girando')
      this.physics.add.collider(this.personagem, moeda.objeto, this.coletar_moeda, null, this)
    })

    this.coração = [
      {
        x: 3455.9,
        y: 4777.9
      },
      {
        x: 693.3,
        y: 2749.3
      },
      {
        x: 960.6,
        y: 4780
      },
      {
        x: 3003.3,
        y: 2212
      },
      {
        x: 1924.3,
        y: 4272
      },
      {
        x: 2102.6,
        y: 3584.6
      },
      {
        x: 1311.3,
        y: 2732.6
      },
      {
        x: 309.3,
        y: 2192
      },
      {
        x: 2485.3,
        y: 2979.9
      },
      {
        x: 4411.9,
        y: 3503.9
      },
      {
        x: 3634,
        y: 3250
      },
      {
        x: 3450.6,
        y: 4028.6
      },
      {
        x: 2678.6,
        y: 3513.3
      }

    ]

    this.anims.create({
      key: 'coração-girando',
      frames: this.anims.generateFrameNumbers('coração', {
        start: 0,
        end: 4
      }),
      frameRate: 4,
      repeat: -1
    })

    this.coração.forEach((coração) => {
      coração.objeto = this.physics.add.sprite(coração.x, coração.y, 'coração')
      coração.objeto.anims.play('coração-girando')
      this.physics.add.collider(this.personagem, coração.objeto, this.coletar_coração, null, this)
    })
    // Score //

    this.textoMoeda = this.add.text(20, 30, `moeda: ${this.game.scoreMoeda.score}`, {
      fontFamily: 'Silkscreen',
      fontSize: '25px',
      stroke: '#000000',
      strokeThickness: 4,
      fill: '#ffffff'
    }).setScrollFactor(0)

    this.textoCoração = this.add.text(20, 70, `coração: ${this.game.scoreCoração.score}`, {
      fontFamily: 'Silkscreen',
      fontSize: '25px',
      stroke: '#000000',
      strokeThickness: 4,
      fill: '#ffffff'
    }).setScrollFactor(0)

    /* botões */
    this.esquerda = this.add.sprite(10, 350, 'esquerda')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.esquerda.setFrame(1)
        if (this.morte.visible) {
          this.personagem.anims.play('personagem-cima')
          this.personagem.setVelocityY(this.velocidade)
        } else {
          this.personagem.anims.play('personagem-esquerda')
          this.personagem.setVelocityX(-this.velocidade)
        }
      })
      .on('pointerout', () => {
        this.esquerda.setFrame(0)
        this.personagem.anims.play('personagem-parado')
        this.personagem.setVelocityX(0)
      })

    this.direita = this.add.sprite(190, 350, 'direita')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.direita.setFrame(1)
        if (this.morte.visible) {
          this.personagem.anims.play('personagem-esquerda')
          this.personagem.setVelocityY(-this.velocidade)
        } else {
          this.personagem.anims.play('personagem-direita')
          this.personagem.setVelocityX(this.velocidade)
        }
      })
      .on('pointerout', () => {
        this.direita.setFrame(0)
        this.personagem.anims.play('personagem-parado')
        this.personagem.setVelocityX(0)
      })

    this.cima = this.add.sprite(100, 260, 'cima')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.cima.setFrame(1)
        if (this.morte.visible) {
          this.personagem.anims.play('personagem-baixo')
          this.personagem.setVelocityY(this.velocidade)
        } else {
          this.personagem.anims.play('personagem-cima')
          this.personagem.setVelocityY(-this.velocidade)
        }
      })
      .on('pointerout', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('personagem-parado')
        this.personagem.setVelocityY(0)
      })

    this.baixo = this.add.sprite(100, 450, 'baixo')
      .setScrollFactor(0)
      .setInteractive()
      .on('pointerover', () => {
        this.baixo.setFrame(1)
        if (this.morte.visible) {
          this.personagem.anims.play('personagem-cima')
          this.personagem.setVelocityY(-this.velocidade)
        } else {
          this.personagem.anims.play('personagem-baixo')
          this.personagem.setVelocityY(this.velocidade)
        }
      })
      .on('pointerout', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('personagem-parado')
        this.personagem.setVelocityY(0)
      })

    this.layerParede.setCollisionByProperty({ collides: true })
    this.layerSombra.setCollisionByProperty({ collides: true })

    this.personagem_colide_portao = this.physics.add.collider(this.personagem, this.portao, this.portao_descendo, null, this)
    this.physics.add.collider(this.personagem, this.layerParede)
    this.physics.add.collider(this.personagem, this.layerSombra)
    this.physics.add.collider(this.personagem, this.portao2, this.portaofinal, null, this)
    this.physics.add.collider(this.personagem, this.portao3, this.portaoalfabeto, null, this)
    this.physics.add.collider(this.personagem, this.portao4, this.portaoresposta, null, this)
    this.physics.add.collider(this.personagem, this.moedaa, this.desafiofinal, null, this)

    this.game.socket.on('estado-notificar', ({ x, y, frame }) => {
      this.personagemRemoto.x = x
      this.personagemRemoto.y = y
      this.personagemRemoto.setFrame(frame)
    })

    this.game.socket.on('artefatos-notificar', (artefatos) => {
      if (artefatos.moeda) {
        this.game.scoreMoeda.score = 0
        for (let i = 0; i < artefatos.moeda.length; i++) {
          if (!artefatos.moeda[i]) {
            this.moeda[i].objeto.disableBody(true, true)
            this.game.scoreMoeda.score++
          }
          this.textoMoeda.setText(`moeda: ${this.game.scoreMoeda.score}`)
        }
      }
      if (artefatos.coração) {
        for (let i = 0; i < artefatos.coração.length; i++) {
          if (!artefatos.coração[i]) {
            this.coração[i].objeto.disableBody(true, true)
          }
        }
      }
    })

    this.timerText = this.add.text(20, -5, 'Hora', {
      fontFamily: 'Silkscreen',
      fontSize: '25px',
      stroke: '#000000',
      strokeThickness: 4,
      fill: '#ffffff'
    }).setScrollFactor(0)
  }

  update () {
    try {
      this.timerText.setText(this.game.data_formatada)
      this.game.socket.emit('estado-publicar', this.game.sala, {
        x: this.personagem.x,
        y: this.personagem.y,
        frame: this.personagem.frame.name
      })
      if (this.vida > 0 && this.morte.visible) {
        /* morte segue personagem mais próximo */
        const hipotenusaPersonagem = Phaser.Math.Distance.Between(
          this.personagem.x,
          this.morte.x,
          this.personagem.y,
          this.morte.y
        )

        const hipotenusaPersonagemRemoto = Phaser.Math.Distance.Between(
          this.personagemRemoto.x,
          this.morte.x,
          this.personagemRemoto.y,
          this.morte.y
        )

        /* Por padrão, o primeiro jogador é o alvo */
        let alvo = this.personagem
        if (hipotenusaPersonagem > hipotenusaPersonagemRemoto) {
          /* Jogador 2 é perseguido pelo morte */
          alvo = this.personagemRemoto
        }

        /* Sentido no eixo X */
        const diffX = alvo.x - this.morte.x
        if (diffX >= 10) {
          this.morte.setVelocityX(this.velocidade * 0.5)
        } else if (diffX <= 10) {
          this.morte.setVelocityX(-this.velocidade * 0.5)
        }

        /* Sentido no eixo Y */
        const diffY = alvo.y - this.morte.y
        if (diffY >= 10) {
          this.morte.setVelocityY(100)
        } else if (diffY <= 10) {
          this.morte.setVelocityY(-100)
        }

        /* Animação */
        try {
          if (diffX > 0) {
            this.morte.anims.play('morte-direita', true)
          } else if (diffX < 0) {
            this.morte.anims.play('morte-esquerda', true)
          } else if (diffY > 0) {
            this.morte.anims.play('morte-baixo', true)
          } else if (diffY < 0) {
            this.morte.anims.play('morte-cima', true)
          } else {
            this.morte.anims.play('morte')
          }
        } catch (error) {
          console.error(error)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  coletar_moeda (personagem, moeda) {
    this.moedaSom.play()
    moeda.disableBody(true, true)
    this.game.scoreMoeda.score++
    this.textoMoeda.setText(`moeda: ${this.game.scoreMoeda.score}`)
    this.game.socket.emit('artefatos-publicar', this.game.sala, {
      moeda: this.moeda.map((moeda) => moeda.objeto.visible)
    })
  }

  coletar_coração (personagem, coração) {
    coração.disableBody(true, true)
    this.game.scoreCoração.score++
    this.textoCoração.setText(`coração: ${this.game.scoreCoração.score}`)
    if (coração.x === 4411.9) {
      this.ambienteSom.stop()
      this.morteSom.play()
      this.morte.enableBody(true, 4600, 3550, true, true)
      this.time.delayedCall(20000, () => {
        this.morte.disableBody(true, true)
        this.ambienteSom.play()
      })
    } else {
      this.moedaSom.play()
    }
    this.game.socket.emit('artefatos-publicar', this.game.sala, {
      coração: this.coração.map((coração) => coração.objeto.visible)
    })
  }

  morteMata (personagem, morte) {
    this.scene.stop('principal')
    this.scene.start('finaltriste')
  }

  portaofinal (personagem, portao2) {
    if (this.game.scoreCoração.score === this.coração.length) {
      this.scene.stop('principal')
      this.scene.start('creditos')
    }
  }

  portaoalfabeto (personagem, portao3) {
    this.scene.pause('principal')
    this.scene.launch('alfabeto')
    this.portao3.destroy()
  }

  portaoresposta (personagem, portao4) {
    this.scene.pause('principal')
    this.scene.launch('resposta')
    this.portao4.destroy()
  }

  desafiofinal (personagem, moedaa) {
    this.scene.pause('principal')
    this.scene.launch('desafiofinal')
    this.moedaa.destroy()
  }

  portao_descendo (personagem, portao) {
    if (this.game.scoreMoeda.score === this.moeda.length) {
      this.portao.anims.play('portao-descendo')
      this.tempo = 2
      this.relogio = this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.tempo--
          if (this.tempo === 0) {
            this.relogio.destroy()
            this.portao.disableBody(true, true)
          }
        },
        callbackScope: this,
        loop: true
      })
    }
  }
}
