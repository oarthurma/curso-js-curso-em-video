function contar() {
    var ini = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var pas = document.getElementById('txtPasso')
    var res = document.querySelector('div#res')


    if (ini.value.length === 0) {
        res.innerHTML = 'Impossível contar'
        return
    }
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    
    
    if (p <= 0){
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    res.innerHTML ='Contando: <br>'
    
    if(i < f) {
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        }
    } else {
        for (var c = i; c >= f; c -= p){
            //res.innerHTML += `${c} `
            res.innerHTML += `${c} \u{1F449} ` 

        }
    }

    
    res.innerHTML += `\u{1F3C1}`
}


