var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora <= 0) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}