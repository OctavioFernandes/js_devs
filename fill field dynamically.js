// get querystring
var queryString = new URLSearchParams(window.location.search)

// validate if we are in analysis nº 13 or 18
if (queryString.get('eusql') === '13' || queryString.get('eusql') === '18') {

    var timeStamp = new Date
    var monthsNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    var inputYearId, selectMontId, selectMontTextId

    //set inputs id's for each analysis
    switch (queryString.get('eusql')) {

        case '13':
            inputYearId = 'ctl00_conteudo_ana13_p13_2_p13_2mBox1'
            selectMontId = 'ctl00_conteudo_ana13_t13_1'
            selectMontTextId = 'select2-ctl00_conteudo_ana13_t13_1-container'
            break;

        case '18':
            inputYearId = 'ctl00_conteudo_ana18_p18_2_p18_2mBox1'
            selectMontId = 'ctl00_conteudo_ana18_t18_1'
            selectMontTextId = 'select2-ctl00_conteudo_ana18_t18_1-container'
            break;

        default:
            inputYearId = NULL
            selectMontId = NULL
            selectMontTextId = NULL
            break;
    }


    // if month is january fill inputs with december and past year ELSE with this year and previous month
    if (timeStamp.getMonth() === "0") {

        //Change input Year for last year
        if (document.getElementById(inputYearId)) {
            document.getElementById(inputYearId).value = (timeStamp.getFullYear() - 1)
        }

        //Change Dropdown Month Selection
        if (document.getElementById(selectMontId)) {
            document.getElementById(selectMontId).value = 'Dezembro'
        }
        //Change Dropdown Month Text
        if (document.getElementById(selectMontTextId)) {
            document.getElementById(selectMontTextId).innerText = 'Dezembro'
        }
    } else {

        //Change input Year
        if (document.getElementById(inputYearId)) {
            document.getElementById(inputYearId).value = timeStamp.getFullYear()
        }

        //Change Dropdown Month Selction
        if (document.getElementById(selectMontId)) {
            document.getElementById(selectMontId).value = monthsNames[timeStamp.getMonth() - 1]
        }

        //Change Dropdown Month Text
        if (document.getElementById(selectMontTextId)) {
            document.getElementById(selectMontTextId).innerText = monthsNames[timeStamp.getMonth() - 1]
        }
    }
}

