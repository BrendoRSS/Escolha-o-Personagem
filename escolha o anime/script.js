function verificar() {
    var res = document.querySelector('div#res')
    var perso = document.getElementsByName('txtperso')
    var infoperso = ''
    var img = document.createElement('img')
    var quali = document.getElementById('quali')
    var qualidade = ''
    img.setAttribute('id', 'foto')
    if (perso[0].checked) {
        infoperso = `<strong>Ichigo Kurosaki</strong>`
        qualidade = '<strong> Qualidades:</strong> Tem uma variedade gigantesca de poderes e habilidades, começando por ser extremamente habilidoso em combate corpo a corpo, apresentando uma força gigante além de velocidade e reflexos. Durante Bleach, o personagem adquire diversos poderes, o primeiro é sua Zanpakuto, chamada de Zangetsu.</p>'
        img.setAttribute('src', 'ichigo.gif')
        
    } else if (perso[1].checked) {
        infoperso = '<strong>Monkey D. Luffy</strong>'
        qualidade = '<strong> Qualidades: </strong> Usa regularmente seus poderes elásticos de maneiras engenhosas e criativas, já que ele é capaz de usar a elasticidade maleável de seus membros para ganhar gerar impulso, e acertar seus inimigos com impactos e golpes potentes.'
        img.setAttribute('src', 'luffy.gif')

    } else {
        infoperso = '<strong>Goku</strong>'
        qualidade = '<strong> Qualidades: </strong> Força, velocidade, durabilidade, sentidos sobre-humanos, resistência sobre-humanas, absorção de energia, resistência ao calor, tele cinese, cura, regeneração, absorção de energia, kaioken, teletransporte e telepatia, técnicas de energia e técnicas de artes marciais'
        img.setAttribute('src', 'goku.gif')
    }

    res.getElementsByClassName.textAlign = 'center'
    res.innerHTML = `O herói escolhido foi ${infoperso}`
    quali.innerHTML = `${qualidade}`
    
    res.appendChild(img)


} 