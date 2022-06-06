
function calcular(){

      var pes = document.querySelector('#kg')
      var calc = document.querySelector('#butt')
      var resuts = document.querySelector('#res')
      var pes = Number(kg.value)
    
      

      res.innerHTML=  `Você está pesando  ${pes}` 


      if ( pes >= 50 ){
         res.innerHTML= `Você está pesando ${pes} <p> e está acima do peso <p> `
       
         document.body.style.background = 'black'
      }
     
      else {
         res.innerHTML= `Você está muito bem  ${pes}`
        
      }
          
        
     
  
         
            
         
         
       
        
    
    
        


    
    

}

