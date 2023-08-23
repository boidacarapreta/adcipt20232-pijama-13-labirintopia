export default class cena0 extends Phaser.Scene {
    constructor () {
        super('cena0')
    }

    preload() {
        this.load.image("Tela-inicial.png"./ assets / Tela - inicial.png)
    }

    create() {
        this.imagem = this.add.image(400, 225, 'Tela-inicial.png')
    }

    update() { }
}