function gerar(){


    let numb = document.getElementById('inica')
    let tab = document.getElementById('setlab')
    if (numb.value.length == 0 ){
        alert(' Insira numero ')
    }
    else {
        let n = Number(numb.value)
        let c = 1
        tab.innerHTML= ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++

        }
    }



}