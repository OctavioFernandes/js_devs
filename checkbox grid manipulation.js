var prm = Sys.WebForms.PageRequestManager.getInstance();

// executa após a pagina ser refrescada apos um postback do servidor
prm.add_pageLoaded(function () {

    $("#alteraDadosClientes .modal-footer").append('<button type="button" class="btn btn-warning" data-dismiss="modal" onclick="ClicarTodos(event)">Marcar Todos</button>')

    $("#grid_alteraDadosClientes tbody tr td span input").click(function (event) {

        event.stopPropagation()

        //guarda os 3 check box da mesma linha da tabela
        var cb1 = event.target.parentElement.parentElement.parentElement.children[4].children[0].children[0]
        var cb2 = event.target.parentElement.parentElement.parentElement.children[5].children[0].children[0]
        var cb3 = event.target.parentElement.parentElement.parentElement.children[6].children[0].children[0]

        //só 1 checkbox pode estar ativo, quando há clique os outros dois tem de estar false
        if (event.target === cb1) {
            if (cb1.checked === true) {
                cb2.checked = !cb1.checked
                cb3.checked = !cb1.checked
            }
        }

        if (event.target === cb2) {
            if (cb2.checked === true) {
                cb1.checked = !cb2.checked
                cb3.checked = !cb2.checked
            }
        }

        if (event.target === cb3) {
            if (cb3.checked === true) {
                cb1.checked = !cb3.checked
                cb2.checked = !cb3.checked
            }
        }
    })

})

// botao para selecionar todos os check box de 2 colunas da grid e vice-versa

var selecionar = false

//botão foi adicionado com evento onclick no html
function ClicarTodos(event) {
    event.stopPropagation()

    if (selecionar === false) {

        //colunas a passar a true
        for (var i = 0; i < $("#grid_alteraDadosClientes tbody tr td span input").length; i += 4) {
            $("#grid_alteraDadosClientes tbody tr td span input")[i].checked = true
        }
        for (var i = 3; i < $("#grid_alteraDadosClientes tbody tr td span input").length; i += 4) {
            $("#grid_alteraDadosClientes tbody tr td span input")[i].checked = true
        }
        //colunas a passar a false
        for (var i = 1; i < $("#grid_alteraDadosClientes tbody tr td span input").length; i += 4) {
            $("#grid_alteraDadosClientes tbody tr td span input")[i].checked = false

        }
        for (var i = 2; i < $("#grid_alteraDadosClientes tbody tr td span input").length; i += 4) {
            $("#grid_alteraDadosClientes tbody tr td span input")[i].checked = false
        }
        selecionar = !selecionar
        event.target.innerHTML = "Desmarcar Todos"

    } else {
        for (var i = 0; i < $("#grid_alteraDadosClientes tbody tr td span input").length; i += 4) {
            $("#grid_alteraDadosClientes tbody tr td span input")[i].checked = false
        }
        for (var i = 3; i < $("#grid_alteraDadosClientes tbody tr td span input").length; i += 4) {
            $("#grid_alteraDadosClientes tbody tr td span input")[i].checked = false
        }
        selecionar = !selecionar
        event.target.innerHTML = "Marcar Todos"
    }
}
