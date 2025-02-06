"use strict"
const cativeiro = document.querySelector("#cativeiro")
const numObjetos = document.querySelector("#numObjetos")
const inputBolinhas = document.querySelector("#inputBolinhas")
const btnAdicionar = document.querySelector("#btnAdicionar")
const btnRemover = document.querySelector("#btnRemover")

let larguraCativeiro = cativeiro.offsetWidth
let alturaCativeiro = cativeiro.offsetHeight
let bolas = []
let numBolas = 0

class Bola{
    constructor(){
        this.tamanho = Math.round(Math.random()*10)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.pX = Math.floor(Math.random() - (larguraCativeiro-this.tamanho))
        this.pY = Math.floor(Math.random() - (alturaCativeiro-this.tamanho))
        this.velocidade = Math.round(Math.random()*5)+5
    }
}

window.addEventListener("resize", (el) => {
    larguraCativeiro = cativeiro.offsetWidth
    alturaCativeiro = cativeiro.offsetHeight
})
btnAdicionar.addEventListener("click", (el) => {
    const quantasBolinhas = inputBolinhas.value
    for(let aux = 0; aux < quantasBolinhas; aux++){
        //Instanciar novas bolinhas
    }
})
btnRemover.addEventListener("click", (el) => {
    bolas.map((el) => {
        //Remover todas as bolinhas
    })
})