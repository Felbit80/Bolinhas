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