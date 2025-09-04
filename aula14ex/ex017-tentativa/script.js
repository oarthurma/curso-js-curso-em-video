function tabuada(){
    let num = window.document.getElementById('num')
    let sel = document.getElementById('sel')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
    let n = Number(num.value)
    sel.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        sel.appendChild(item)
    }
   
    
    }
    
}