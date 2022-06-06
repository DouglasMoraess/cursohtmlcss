function upload() {
var msg = document.getElementById('msg')
var img = document.getElementById('imag')
var data = new Date ()
var hora = data.getHours() 


msg.innerHTML = `Agora são ${hora} horas`


if ( hora >= 0 && hora < 13) {
    img.src = "manha-peq.jpg.jpg"
    document.body.style.background= "#ACC6D5"
}
else if( hora >= 12 && hora <= 18){
    img.src= "tarde-peq.jpg.jpg"
    document.body.style.background= "#7F5139"
}
else{
    img.src= "noite-peq.jpg.jpg"
    document.body.style.background= "#372A44"
}






}