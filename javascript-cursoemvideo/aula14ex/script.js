function cont(){
  var rec1 = document.querySelector('#inic')
  var rec2 = document.querySelector('#finish')
  var pasx = document.querySelector('#pass')
  var res = document.querySelector('#res')
  
  
if(rec1.value.length == 0 || rec2.value.length == 0 || pasx.value.length == 0){
  window.alert('Faltam dados')


}
else{
  res.innerHTML= 'Contando :'
  var i =Number(rec1.value)
  var j = Number (rec2.value)
  var p = Number(pasx.value)


  for(var c = i ; c <= j; c += p){
      res.innerHTML += `${c} \u{1F449}	`

  }




}


 

}