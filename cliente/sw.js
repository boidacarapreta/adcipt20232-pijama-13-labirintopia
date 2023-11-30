// Choose a cache name
const cacheName = 'cache-v1'

// List the files to precache
const precacheResources = [
  './',
  './index.html',
  './main.css',
  './assets/logo/128.png',
  './assets/logo/192.png',
  './assets/logo/256.png',
  './assets/logo/384.png',
  './assets/logo/512.png',
  './assets/alfabeto/a.png',
  './assets/alfabeto/alfabeto1.png',
  './assets/alfabeto/alfabeto2.png',
  './assets/alfabeto/alfabeto12.png',
  './assets/alfabeto/c.png',
  './assets/alfabeto/d.png',
  './assets/alfabeto/e.png',
  './assets/alfabeto/i.png',
  './assets/alfabeto/l.png',
  './assets/alfabeto/m.png',
  './assets/alfabeto/p.png',
  './assets/alfabeto/u.png',
  './assets/botoes/baixo.png',
  './assets/botoes/baixo1.png',
  './assets/botoes/baixoalfabeto.png',
  './assets/botoes/botoes.png',
  './assets/botoes/cima.png',
  './assets/botoes/direita.png',
  './assets/botoes/esquerda.png',
  './assets/botoes/grade.png',
  './assets/botoes/gradedesistir.png',
  './assets/botoes/gradecontinuar.png',
  './assets/botoes/telacheia.png',
  './assets/botoes/telacheia11.png',
  './assets/botoes/vazio.png',
  './assets/mapa/base-parede.1.png',
  './assets/mapa/labirintopia.json',
  './assets/mapa/mapa.json',
  './assets/mapa/parede-horizontal.1.png',
  './assets/mapa/base-quina.1.png',
  './assets/mapa/parede-vertical.1.png',
  './assets/mapa/sombra1.png',
  './assets/mapa/sombra2.png',
  './assets/mapa/sombra3.png',
  './assets/mapa/sombra4.png',
  './assets/mapa/sombra5.png',
  './assets/mapa/sombra6.png',
  './assets/mapa/sombra7.png',
  './assets/mapa/sombra8.png',
  './assets/mapa/terreno.1.png',
  './assets/mapa/topo-de-quina.1.png',
  './assets/personagens/alatar.png',
  './assets/personagens/íris.png',
  './assets/personagens/morte.png',
  './assets/personagens/morte1.png',
  './assets/1.png',
  './assets/escolhas.png',
  './assets/audioambiente.mp3',
  './assets/audiomoeda.mp3',
  './assets/audiomorte.mp3',
  './assets/audioporta.mp3',
  './assets/audiotransição.mp3',
  './assets/clique.mp3',
  './assets/coração.png',
  './assets/coração1.png',
  './assets/coração2.png',
  './assets/credito.mp3',
  './assets/erro.mp3',
  './assets/finaldejogo.png',
  './assets/fundo.png',
  './assets/fundodesafio (2).png',
  './assets/fundodesafio.png',
  './assets/game-over.png',
  './assets/inicio.png',
  './assets/moeda.png',
  './assets/moeda1.png',
  './assets/morte.png',
  './assets/portaentrada.png',
  './assets/portao.png',
  './assets/portaentrada1.png',
  './assets/portao2.png',
  './assets/portao3.png',
  './assets/portao4.png',
  './assets/resposta.png',
  './assets/salas.png',
  './assets/moedaa.png',
  './assets/resposta.png',
  './assets/resposta1.png',
  // './assets/respiração.mp4',
  './assets/tela-inicial.png',
  './assets/telafinal.png',
  '/js/cenas/cena-alfabeto.js',
  '/js/cenas/cena-creditos.js',
  '/js/cenas/cena-final-feliz.js',
  '/js/cenas/cena-game-over.js',
  '/js/cenas/cena-principal.js',
  '/js/cenas/cena-resposta.js',
  '/js/cenas/cena-sala.js',
  '/js/cenas/cena0.js',
  '/js/axios.min.js',
  '/js/config.js',
  '/js/index.js',
  '/js/phaser.min.js'
]

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!')
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!')
})

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
