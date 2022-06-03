var op1= document.querySelector('#opcao1')
var op2 = document.querySelector('#opcao2')
var res = document.querySelector('#res')
var img = document.createElement('img')
img.setAttribute('id', 'foto')

function option1(){
    res.innerHTML = `<h2>Você tem direito á um café da manhã comigo!<h2>`
    
    img.setAttribute('src', 'cafz.png') 
    res.appendChild(img) 
    document.body.style.background = "#D88574"


}


function option2(){
    res.innerHTML = `<h2>Você tem direito á um chop comigo!<h2>`
    
    img.setAttribute('src', 'pubs.png') 
    res.appendChild(img) 
    document.body.style.background = "#B65803"
    



}
