const urlBackend = "http://localhost:3000"

const listaMusicas = document.getElementById("listaMusica")

async function buscarMusicas(){
    const resposta = await fetch(urlBackend)
    const musica = await resposta.json()

    




}