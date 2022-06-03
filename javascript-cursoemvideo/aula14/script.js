function verificar(){
    var data = new Date ()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById("txtbusc")
    var res = document.getElementById("res")

    if( fano.value.length == 0 || fano.value > ano ){
        window.alert("[Erro] Verifique os dados e tente novamente")
    }

    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade <10){
                // Jovem
                img.setAttribute('src', 'menino-peq.jpg')
            }
        else if(idade >= 10 && idade < 21){
            //  Criança
            img.setAttribute('src', 'homen-peq.jpg')


        }
        else if( idade <50){
            //Adulto
            img.setAttribute('src', 'homen-peq.jpg')

        }

        else {
            //Senhor
            img.setAttribute('src', 'senhor-peq.jpg')



        }




        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                // Jovem
                img.setAttribute('src', 'mulher-peq.jpg')

            }
        else if(idade >= 10 && idade < 21){
            //  Criança
            img.setAttribute('src', 'menina-peq.jpg')



        }
        else if( idade <50){
            //Adulto
            img.setAttribute('src', 'mulher-peq.jpg')

        }

        else {
            //Senhor
            img.setAttribute('src', 'senhora-peq.jpg')



        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) 

    }
    

}