function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //troca a imagem para o light do sol
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar antonio light.png')
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar antonio.png')
  }
}