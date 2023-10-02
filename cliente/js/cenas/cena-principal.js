export default class principal extends Phaser.Scene {
  constructor () {
    super('principal')
  }

  preload () {
    this.load.tilemapTiledJSON('labirinto', '../assets/mapa/mapa.json')

    this.load.image('sombra1', '../assets/mapa/sombra1.png')
    this.load.image('sombra2', '../assets/mapa/sombra2.png')
    this.load.image('sombra3', '../assets/mapa/sombra3.png')
    this.load.image('sombra4', '../assets/mapa/sombra4.png')
    this.load.image('sombra5', '../assets/mapa/sombra5.png')
    this.load.image('sombra6', '../assets/mapa/sombra6.png')
    this.load.image('sombra7', '../assets/mapa/sombra7.png')
    this.load.image('terreno', '../assets/mapa/terreno.1.png')
    this.load.image('base-parede1', '../assets/mapa/base-parede.1.png')
    this.load.image('parede-horizontal1', '../assets/mapa/parede-horizontal.1.png')
    this.load.image('parede-vertical1', '../assets/mapa/parede-vertical.1.png')
    this.load.image('topo-de-quina1', '../assets/mapa/topo-de-quina.1.png')
    this.load.image('base-quina1', '../assets/mapa/base-quina.1.png')

    this.load.spritesheet('botao', '../assets/botoes/botoes.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
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
    this.tilesetTerreno1 = this.tilemapLabirinto.addTilesetImage('terreno.1')
    this.tilesetBaseParede1 = this.tilemapLabirinto.addTilesetImage('base-parede.1')
    this.tilesetParedeHorizontal1 = this.tilemapLabirinto.addTilesetImage('parede-horizontal.1')
    this.tilesetParedeVertical1 = this.tilemapLabirinto.addTilesetImage('paredes-vertical.1')
    this.tilesetTopoDeQuina1 = this.tilemapLabirinto.addTilesetImage('topo-de-quina.1')
    this.tilesetBaseQuina1 = this.tilemapLabirinto.addTilesetImage('base-quina.1')

    this.layerTerreno = this.tilemapLabirinto.createLayer('terreno', [this.tilesetTerreno1])
    this.layerParede = this.tilemapLabirinto.createLayer('parede', [this.tilesetBaseParede1, this.tilesetParedeHorizontal1, this.tilesetParedeVertical1, this.tilesetTopoDeQuina1, this.tilesetTopoDeQuina1])
    this.layerSombra = this.tilemapLabirinto.createLayer('sombra', [this.tilesetSombra1, this.tilesetSombra2, this.tilesetSombra3, this.tilesetSombra4, this.tilesetSombra5, this.tilesetSombra6, this.tilesetSombra7])
  }

  update () { }
}
