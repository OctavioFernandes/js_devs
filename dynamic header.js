var prm = Sys.WebForms.PageRequestManager.getInstance();
var injetado = false

// executa após a pagina ser refrescada apos um postback do servidor
prm.add_pageLoaded(function () {

    //prevenir execussão em todos os paineis
    if (getParameterByName('eusql') == 3) {
        injetado = false

        //Evento MouseWheel - Pc's
        document.addEventListener("wheel", function () {
            setDynamicCabecalho()
        })

        //Evento TouchsScreen - Tablets e Smartphones
        document.addEventListener("touchmove", function () {
            setDynamicCabecalho()
        })
    }
});


function setDynamicCabecalho() {

    //Se existir a tabela
    if (document.querySelector("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child")) {

        // Recebe coordenadas relativas a posição da tabela
        var elemento = document.querySelector("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child").getBoundingClientRect()

        if (injetado && elemento.y < 0) {
            //menor que esta coordenada o cabeçalho deixa de estar visivel ao user
            criarCabeçalho(elemento.width, elemento.left)
            injetado = !injetado
        }

        if (!injetado && elemento.y >= 0) {
            //maior que esta coordenada o cabeçalho original fica visivel ao user 
            if (document.getElementById('cabecalho-cliente')) {
                document.getElementById('cabecalho-cliente').remove()
            }
            injetado = !injetado
        }
    }

}


function criarCabeçalho(width, left) {

    //Cria elemento cabeçalho
    if (!document.getElementById('cabecalho-cliente')) {
        var cabecalho = document.createElement('div')
        cabecalho.id = 'cabecalho-cliente'
        cabecalho.style.position = 'fixed'
        cabecalho.style.paddingTop = '15px'
        cabecalho.style.top = '50px'
        cabecalho.style.left = left + 'px'
        //Vai beber as dimensões do cabeçalho da tabela original e copia para o cabeçalho dinamico
        cabecalho.innerHTML = '<table id="cliente-tabela" style="width:100%;"> <tbody> <tr>'
            + '<td ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(1)").css("width") + ';">O</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(2)").css("width") + ';">Projecto</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(3)").css("width") + ';">Dt Assin</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(4)").css("width") + ';">Sala</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(5)").css("width") + ';">Valor Adjudicado</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(6)").css("width") + ';">Custos</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(7)").css("width") + ';">Facturado</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(8)").css("width") + ';">Fact-Custos</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(9)").css("width") + ';">Adjud-Custos</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(10)").css("width") + ';">Recebido</td>'
            + '<td style="width: ' + $("#ctl00_conteudo_ana3_mgrid1 tbody tr:first-child td:nth-child(11)").css("width") + ';">Facturas</td>'
            + '</tr> </tbody> </table>'
        cabecalho.style.zIndex = '9999px'
        cabecalho.style.color = '#fff'
        cabecalho.style.backgroundColor = '#0765b7'
        cabecalho.style.height = '50px'
        cabecalho.style.width = width + "px"

        //Injeta novo cabeçalho
        document.getElementById('ctl00_conteudo_ana3_but1').appendChild(cabecalho)
    }

}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url); if (!results) return null;
    if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, " "));
};
