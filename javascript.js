
function carregar(){
    var date = new Date()
    var dia = date.getDay()
    var txt = document.getElementById('sem')

    switch(dia){
        case 1:
            txt.innerText = 'Segunda-Feira'
            break
        case 2:
            txt.innerText = 'Terça-Feira'
            break
        case 3:
            txt.innerText = 'Quarta-Feira'
            break
        case 4:
            txt.innerText = 'Quinta-Feira'
            break
        case 5:
            txt.innerText = 'Sexta-feira'
            break
        case 6:
            txt.innerText = 'Sábado'
            break
        default:
            txt.innerText = 'Domingo'
            break
    }
}
function verificar(){
    var idade1 = document.getElementById('idade') // resgata o valor como string
    var idade = Number(idade1.value) // transforma o valor em um Number
    var resposta = document.getElementById('res')

    if(idade <= 0 || idade >= 125){
        resposta.innerText = 'Digite uma idade válida'
    }else{
        if(idade < 16){
            resposta.innerText = 'Voto negado!'
        }else if(idade >= 16 && idade < 18 || idade >= 70){
            resposta.innerText = 'Voto opcional!'
        }else{
            resposta.innerText = 'Voto obrigatório!'
        }
    }
}
function ver(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0 || passo.value < 0){
        window.alert('Informe todos os dados!')
    }else{
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)

        res.innerHTML = 'Contando:'
        //contagem crescente:
        if(ini < fi){
            for(var c = ini; c <= fi; c += pas){
                res.innerHTML += `  ${c} \u{1F449}`
            }
        //contagem decrescente:
        }else{
            for(var c = ini; c >= fi; c-= pas){
                res.innerHTML += `  ${c} \u{1F449}`
            }
        }
        res.innerHTML += `  &#x1F3C1`
    }
}