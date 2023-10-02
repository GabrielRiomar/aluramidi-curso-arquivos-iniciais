function tocaSom(id) {
  const elemento = document.querySelector(id)

  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  } else {
    console.log('Elemento não encontrado')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

const listaDeSom = document.querySelectorAll('audio')

for (contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]

  const instrumento = tecla.classList[1]

  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  tecla.onkeydown = event => {
    if (event.code === 'Enter' || event.code === 'Space') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = event => {
    if (event.code === 'Enter' || event.code === 'Space') {
      tecla.classList.remove('ativa')
    }
  }
}
