function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.querySelector(`div#res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'h.crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','h.jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'h.adulto.png')
            } else {
                //Idoso
                img.setAttribute('src','h.idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','m.crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','m.jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','m.adulta.png')
            } else {
                //Idoso
                img.setAttribute('src','m.idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. </br>`
        res.appendChild(img)
    }
}