export default class alfabeto extends Phaser.Scene {
  constructor () {
    super('alfabeto')
  }

  preload () {
    this.load.image('fundodesafio', '../assets/fundodesafio.png')

    this.load.image('a', '../assets/alfabeto/a.png')
    this.load.image('c', '../assets/alfabeto/c.png')
    this.load.image('d', '../assets/alfabeto/d.png')
    this.load.image('e', '../assets/alfabeto/e.png')
    this.load.image('i', '../assets/alfabeto/i.png')
    this.load.image('l', '../assets/alfabeto/l.png')
    this.load.image('m', '../assets/alfabeto/m.png')
    this.load.image('p', '../assets/alfabeto/p.png')
    this.load.image('u', '../assets/alfabeto/u.png')
    this.load.spritesheet('alfabeto', '../assets/alfabeto/alfabeto1.png', {
      frameWidth: 44,
      frameHeight: 59
    })
    this.load.spritesheet('botao', '../assets/botoes/baixoalfabeto.png', {
      frameWidth: 33,
      frameHeight: 33

    })
    this.load.spritesheet('direita', '../assets/botoes/direitaa.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.imagem = this.add.image(400, 225, 'fundodesafio')
    this.image = this.add.sprite(720, 400, 'direita')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('alfabeto')
        this.game.scene.resume('principal')
      })

    /* alfabeto no local */
    this.alfabeto = [
      {
        numero: '1',
        x: 105.9,
        y: 230
      },

      {
        numero: '2',
        x: 157.9,
        y: 230
      },
      {
        numero: '3',
        x: 210,
        y: 230
      },
      {
        numero: '4',
        x: 263.9,
        y: 230
      },
      {
        numero: '5',
        x: 314,
        y: 230
      },
      {
        numero: '6',
        x: 369,
        y: 230
      },
      {
        numero: '7',
        x: 420,
        y: 230
      },
      {
        numero: '8',
        x: 472.9,
        y: 230
      },
      {
        numero: '9',
        x: 525,
        y: 230
      },
      {
        numero: '10',
        x: 576,
        y: 230
      },
      {
        numero: '11',
        x: 630,
        y: 230
      },
      {
        numero: '12',
        x: 685,
        y: 230
      }
    ]

    this.alfabeto.forEach((item) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabeto')
    })

    this.botao = [
      {
        numero: '1',
        x: 105.9,
        y: 280
      },

      {
        numero: '2',
        x: 157.9,
        y: 280
      },
      {
        numero: '3',
        x: 210,
        y: 280
      },
      {
        numero: '4',
        x: 263.9,
        y: 280
      },
      {
        numero: '5',
        x: 314,
        y: 280
      },
      {
        numero: '6',
        x: 369,
        y: 280
      },
      {
        numero: '7',
        x: 420,
        y: 280
      },
      {
        numero: '8',
        x: 472.9,
        y: 280
      },
      {
        numero: '9',
        x: 525,
        y: 280
      },
      {
        numero: '10',
        x: 576,
        y: 280
      },
      {
        numero: '11',
        x: 630,
        y: 280
      },
      {
        numero: '12',
        x: 685,
        y: 280
      }
    ]

    // Adição dos botao e configuração da interatividade.
    this.verificacao10 = 'V'

    this.botao.forEach((item, index) => {
      item.botao = this.add.image(item.x, item.y, 'botao')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.game.verifica_alfabeto === 'F') {
            this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)
            console.log(this.botao[index].numero)
            console.log(this.alfabeto[index].objeto.frame.name)

            // Verifica caixas
            if (this.botao[index].numero === '1') {
              if (this.alfabeto[index].objeto.frame.name === 2) {
                console.log('deu certo')
                this.verificacao1 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao1 = 'F'
              }
            }
            if (this.botao[index].numero === '2') {
              if (this.alfabeto[index].objeto.frame.name === 20) {
                console.log('deu certo')
                this.verificacao2 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao2 = 'F'
              }
            }
            if (this.botao[index].numero === '3') {
              if (this.alfabeto[index].objeto.frame.name === 12) {
                console.log('deu certo')
                this.verificacao3 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao3 = 'F'
              }
            }
            if (this.botao[index].numero === '4') {
              if (this.alfabeto[index].objeto.frame.name === 15) {
                console.log('deu certo')
                this.verificacao4 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao4 = 'F'
              }
            }
            if (this.botao[index].numero === '5') {
              if (this.alfabeto[index].objeto.frame.name === 11) {
                console.log('deu certo')
                this.verificacao5 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao5 = 'F'
              }
            }
            if (this.botao[index].numero === '6') {
              if (this.alfabeto[index].objeto.frame.name === 8) {
                console.log('deu certo')
                this.verificacao6 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao6 = 'F'
              }
            }
            if (this.botao[index].numero === '7') {
              if (this.alfabeto[index].objeto.frame.name === 2) {
                console.log('deu certo')
                this.verificacao7 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao7 = 'F'
              }
            }
            if (this.botao[index].numero === '8') {
              if (this.alfabeto[index].objeto.frame.name === 8) {
                console.log('deu certo')
                this.verificacao8 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao8 = 'F'
              }
            }
            if (this.botao[index].numero === '9') {
              if (this.alfabeto[index].objeto.frame.name === 3) {
                console.log('deu certo')
                this.verificacao9 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao9 = 'F'
              }
            }
            if (this.botao[index].numero === '10') {
              if (this.alfabeto[index].objeto.frame.name === 0) {
                console.log('deu certo')
                this.verificacao10 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao10 = 'F'
              }
            }
            if (this.botao[index].numero === '11') {
              if (this.alfabeto[index].objeto.frame.name === 3) {
                console.log('deu certo')
                this.verificacao11 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao11 = 'F'
              }
            }
            if (this.botao[index].numero === '12') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                console.log('deu certo')
                this.verificacao12 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao12 = 'F'
              }
            }
            // Fazer outro if pra ver se fez o enigma anterior!!!!! -> podem passar a resposta um para outro
            // Verificação pra ver se corresponde ao código
            if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V' && this.verificacao5 === 'V' && this.verificacao6 === 'V' && this.verificacao7 === 'V' && this.verificacao8 === 'V' && this.verificacao9 === 'V' && this.verificacao10 === 'V' && this.verificacao11 === 'V' && this.verificacao12 === 'V') {
              console.log('foi meu')
              // Ilumina letras
              this.add.image(105.9, 230, 'c')
              this.add.image(157.9, 230, 'u')
              this.add.image(210, 230, 'm')
              this.add.image(263.9, 230, 'p')
              this.add.image(314, 230, 'l')
              this.add.image(369, 230, 'i')
              this.add.image(420, 230, 'c')
              this.add.image(472.9, 230, 'i')
              this.add.image(525, 230, 'd')
              this.add.image(576, 230, 'a')
              this.add.image(630, 230, 'd')
              this.add.image(685, 230, 'e')
              this.game.verifica_alfabeto = 'V'
              this.alfabeto.forEach((index) => {
                this.alfabeto[index].objeto.setVisible(false)
              })
            } else {
              this.game.verifica_alfabeto = 'F'
            }
          }
        })
    })
  }

  update () {
  }
}
