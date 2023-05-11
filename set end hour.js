// Se não existe o botão introduzir e existe o botão gravar é porque estamos em modo introdução
if (!document.getElementById("BUINTRODUZIR") && document.getElementById("BUGRAVAR")) {

    var inputHini = document.getElementById('ctl00_conteudo_hinicio_hiniciomBox1')
    var inputHfim = document.getElementById('ctl00_conteudo_hfim_hfimmBox1')

    inputHini.addEventListener('focusout', function (ev) {
        //validar se inputs são numeros e veem com ':'
        if (typeof parseInt(ev.target.value.split(':')[0]) === 'number' &&
            typeof parseInt(ev.target.value.split(':')[1]) === 'number') {
            //Validou input então executa a função
            setEndHour(parseInt(ev.target.value.split(':')[0]), parseInt(ev.target.value.split(':')[1]))
        }
    })


    function setEndHour(hini, hfim) {
        // Cria um dateTime com hora e minuto da marcação
        var inicioMarcacao = new Date(2023, 3, 1, hini, hfim)
        // Incrementa 45min
        var fimMarcacao = new Date(inicioMarcacao.setMinutes(inicioMarcacao.getMinutes() + 45))
        //Define hora fim
        inputHfim.value = fimMarcacao.getHours() + ':' + fimMarcacao.getMinutes()
    }
}
