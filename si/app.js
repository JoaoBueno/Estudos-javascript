var sleep = require('sleep')

const _ESC = String.fromCharCode(0x1b)

//ESC[2J -> limpa a tela
const _cls = () => console.log(_ESC + '[2J')

//ESC[PL;PcH -> posiciona o cursor
const _pos = (l, c, s) => {
  console.log(_ESC + '[' + l + ';' + c + 'H' + s)
}

const NOT = x => !x

const isDivisibleBy = y => x => NOT(x % y)

const isEven = isDivisibleBy(2)
const isOdd = x => NOT(isEven(x))

function function2() {
  console.log('')
}

//ESC[Ps;... ;Psm -> cores
// Atributos de texto                Cores de primeiro plano  Cores de segundo plano
// 0 Todos os atributos desativados  30 Preto                 40 Preto
// 1 Negrito ativado                 31 Vermelho              41 Vermelho
// 4 Sublinhado                      32 Verde                 42 Verde
// 5 Intermitencia ativada           33 Amarelo               43 Amarelo
// 7 Video reverso ativado           34 Azul                  44 Azul
// 8 Oculto ativado                  35 Magenta               45 Magenta
//                                   36 Ciano                 46 Ciano
//                                   37 Branco                47 Branco
const _cor = (c1, c2, c3) => {
  console.log(_ESC + '[' + c1 + ';' + c2 + ';' + c3 + 'm')
}

let invaders = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 5, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 6, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 7, 1, 1, 1]
]

_cor(1, 33, 44)
_cls()
_pos(0, 0, '')

let c = 1
let l = 1

for (let a = 0; a < 10; a++) {
  for (let b = 0; b < 10; b++) {
    _cls()
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 10; j++) {
        let x = (j + c) * 3
        let y = (i + l) * 2
        // console.log(x,y)
        _pos(y, x, invaders[i][j])
        // _pos(20, 20, x)
        // _pos(21, 20, y)
        // _pos(22, 20, c)
      }
    }
    sleep.sleep(1)
    if (isEven(a) === true) {
      c++
    } else {
      c--
    }
  }
  l++
  if (isEven(a) === true) {
    c--
  } else {
    c++
  }
}
