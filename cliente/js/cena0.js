export default class cena0 extends Phaser.Scene {
    constructor () {
        super('cena0')
    }

    preload() {
        this.load.image('ifsc-sj-2014', '../assets/fundo_final.png')
    }

    create() {
        this.imagem = this.add.image(400, 225, 'ifsc-sj-2014')
    }

    update() { }
}