async function getApi(){
    
    var data = document.querySelector("#data").value
    const key = "yYoV1Sf0CBSQqgnEpra4oCSFGZyhqvDhBSswWYga"  
    const resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`)
    const dados = await resposta.json() 
    console.log(dados)
    document.querySelector("#leg").innerText = dados.explanation

}

const btn = document.querySelector("#botao")
btn.addEventListener ("click",botao)

function botao(){
getApi()
}

