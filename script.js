let quanti = document.querySelector(".quantia")
let btn = document.querySelector("button")
let resultado = document.querySelector(".resultado")



async function meodas(){
    let url = `https://api.exchangerate.host/convert?from=BRL&to=USD&amount=${quanti.value}`
   let a = await fetch(url)
   let b = await a.json()
   console.log(resultado.innerHTML = b.result)
   
}


btn.addEventListener("click" , meodas)