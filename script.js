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
    constructor(cativeiro, arrayBolas){
        this.tamanho = Math.round(Math.random()*10)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.pX = Math.floor(Math.random() - (larguraCativeiro-this.tamanho))
        this.pY = Math.floor(Math.random() - (alturaCativeiro-this.tamanho))
        this.velocidadeX = Math.round(Math.random()*5)+5
        this.velocidadeY = Math.round(Math.random()*5)+5
        this.direcaoX = (Math.random()*10) < 5 ? 1 : -1
        this.direcaoY = (Math.random()*10) < 5 ? 1 : -1
        this.cativeiro=cativeiro
        this.arrayBolas=arrayBolas
        this.id=Date.now()+Math.floor(Math.random()*1000000000000)
        this.imprimir()
        this.controle=setInterval(this.controlar(), 10)
        this.bolaDOM = document.getElementById(this.id)
    }
    posBola = () => {
        //Retorna a posição da bolinha
    }
    remover = () => {
        //Remove a bolinha do DOM
    }
    imprimir = () => {
        //Insere a bolinha no DOM
    }
    controlar = () => {
        //Verifica posição e distâncida da bola da borda
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