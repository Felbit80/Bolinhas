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
    constructor(arrayBolas, cativeiro){
        this.tamanho = Math.round(Math.random()*10)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.pX = Math.floor(Math.random() * (larguraCativeiro-this.tamanho))
        this.pY = Math.floor(Math.random() * (alturaCativeiro-this.tamanho))
        this.velocidadeX = Math.round(Math.random()*1.5)+2
        this.velocidadeY = Math.round(Math.random()*1.5)+2
        this.direcaoX = (Math.random()*10) < 5 ? 1 : -1
        this.direcaoY = (Math.random()*10) < 5 ? 1 : -1
        this.cativeiro=cativeiro
        this.arrayBolas=arrayBolas
        this.id=Date.now()+Math.floor(Math.random()*1000000000000)
        this.imprimir()
        this.controle=setInterval(this.controlar, 10)
        this.bolaDOM = document.getElementById(this.id)
        numBolas++
        numObjetos.innerHTML=numBolas
    }
    posBola = () => {
        return bolas.indexOf(this)
    }
    remover = () => {
        clearInterval(this.controle)
        bolas=bolas.filter((el) => {
            if(el.id != this.id){
                return el
            }
        })
        this.bolaDOM.remove()
        numBolas--
        numObjetos.innerHTML=numBolas
    }
    imprimir = () => {
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left: ${this.pX}px; top: ${this.pY}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background-color: rgb(${this.r}, ${this.g}, ${this.b});`)
        cativeiro.appendChild(div)
    }
    colisao = () => {
        if(this.pX+this.tamanho*0.5 >= larguraCativeiro){
            this.direcaoX = -1
        } else if(this.pX-this.tamanho*0.5 <= 0){
            this.direcaoX = 1
        }
        if(this.pY+this.tamanho*0.5 >= alturaCativeiro){
            this.direcaoY = -1
        } else if(this.pY-this.tamanho*0.5 <= 0){
            this.direcaoY = 1
        }
    }
    controlar = () => {
        this.colisao()
        this.pX += this.direcaoX*this.velocidadeX
        this.pY += this.direcaoY*this.velocidadeY
        this.bolaDOM.setAttribute("style", `left: ${this.pX}px; top: ${this.pY}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background-color: rgb(${this.r}, ${this.g}, ${this.b});`)
        if(this.pX > larguraCativeiro || this.pY > alturaCativeiro){
            this.remover()
        }
    }
}

window.addEventListener("resize", (el) => {
    larguraCativeiro = cativeiro.offsetWidth
    alturaCativeiro = cativeiro.offsetHeight
})
btnAdicionar.addEventListener("click", (el) => {
    const quantasBolinhas = inputBolinhas.value
    for(let aux = 0; aux < quantasBolinhas; aux++){
        bolas.push(new Bola(bolas, cativeiro))
    }
})
btnRemover.addEventListener("click", (el) => {
    bolas.map((el) => {
        el.remover()
    })
})