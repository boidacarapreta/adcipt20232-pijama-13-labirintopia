export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    this.load.image('sala', './assets/salas.png')
    this.load.image('vazio', '../assets/botoes/vazio.png')
    this.load.spritesheet('telacheia', '../assets/botoes/telacheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
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

    this.imagem = this.add.image(400, 225, 'sala').setTint(0xcccccc)

    this.salas = [

      {
        numero: '1',
        x: 135,
        y: 195,
        botao: undefined
      },
      {
        numero: '2',
        x: 282,
        y: 195,
        botao: undefined
      },
      {
        numero: '3',
        x: 514,
        y: 195,
        botao: undefined
      },
      {
        numero: '4',
        x: 672,
        y: 195,
        botao: undefined
      },
      {
        numero: '5',
        x: 217,
        y: 295,
        botao: undefined
      },
      {
        numero: '6',
        x: 400,
        y: 295,
        botao: undefined
      },
      {
        numero: '7',
        x: 593,
        y: 295,
        botao: undefined
      },
      {
        numero: '8',
        x: 318,
        y: 359,
        botao: undefined
      },
      {
        numero: '9',
        x: 505,
        y: 359,
        botao: undefined
      },
      {
        numero: '10',
        x: 394,
        y: 425,
        botao: undefined
      }
    ]

    this.salas.forEach((sala) => {
      sala.botao = this.add
        .sprite(sala.x, sala.y, 'vazio')
        .setInteractive()
        .on('pointerdown', () => {
          this.salas.forEach((item) => {
            item.botao.destroy()
          })
          this.game.sala = sala.numero
          this.game.socket.emit('entrar-na-sala', this.game.sala)
        })
    })

    this.game.socket.on('jogadores', (jogadores) => {
      this.game.jogadores = jogadores
      console.log(jogadores)
      if (jogadores.segundo) {
        // this.mensagem.setText('Conectando...')
        this.game.jogadores = jogadores
        this.game.scene.stop('sala')
        this.game.scene.start('principal')
      } else if (jogadores.primeiro) {
        // this.mensagem.setText('Aguardando segundo jogador...')
        navigator.mediaDevices
          .getUserMedia({ video: false, audio: true })
          .then((stream) => {
            this.game.midias = stream
          })
          .catch((error) => console.error(error))
      }
    })
  }
}
