
function calcular(){
    var qtdeHospede, qtdeDiaria, slcSuite, nomeProduto, valorUnitario, adicionais = 0, valorTotal,valorDiaria,comida;
    
    slcSuite = document.getElementById("slcSuite");
    qtdeHospede = document.getElementById("qtdeHospede").value;
    slcSuiteValue = slcSuite.options[slcSuite.selectedIndex].value;
    qtdeDiaria = document.getElementById("qtdeDiaria").value;


    //Radio button
    var entrega = parseInt(document.form.rdEntrega.value);

    if(entrega==1){
        comida = 30.00;
    }
    else if (entrega==2){
        comida = 60.00;
    }
    else{
        comida=120.00;
    }

    //Checkbox
    if (document.getElementById('traslado').checked) {
        adicionais = adicionais + 50.00;
    }
    if (document.getElementById('tuor').checked == true){
        adicionais = adicionais + 70.00;
    }
    if (document.getElementById('passeio').checked == true){
        adicionais = adicionais + 100.00;
    }

    switch(slcSuiteValue){
        case "1":
            valorDiaria = 155.00;
            document.getElementById('nomeProduto').innerHTML= "Quarto de Luxo";
            valorUnitario = 260.90;

            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" +valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            
            document.getElementById('diaria').innerHTML = "Valor da Diaria: R$" + valorDiaria;
            document.getElementById('valorTotal').innerHTML = "Valor Total:  " + "R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: " + "R$" + comida;
            break;
        case "2":
            valorDiaria = 275.00;
            valorUnitario = 399.99;
            document.getElementById('nomeProduto').innerHTML = "Quarto de Casal";
            document.getElementById('valorUnitario').innerHTML = "Valor por casal R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;

            document.getElementById('valorTotal').innerHTML = "Valor Total: R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria:R$" + valorDiaria;
            break;
        case "3":
            valorDiaria = 345.00;
            document.getElementById('nomeProduto').innerHTML = "Quarto Belo";
            valorUnitario = 400.00;
            document.getElementById('valorUnitario').innerHTML = "Valor por Pessoa : R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total: R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria :  " + "R$" + valorDiaria;
            break;
        case "4":
            valorDiaria = 530.00;
            document.getElementById('nomeProduto').innerHTML = "Quarto Luar";
            valorUnitario = 650.00;
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria : R$" + valorDiaria;
            break;
        case "5":
            valorDiaria = 600.00;
            document.getElementById('nomeProduto').innerHTML = "Quarto Simples";
            valorUnitario = 750.00;
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" + valorUnitario;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria : R$" + valorDiaria;
            break;
        default:
            valorUnitario = "Selecione Alguma Suite";
            document.getElementById('valorUnitario').innerHTML = "Selecione uma Suíte Válida";
            break;
    }
    
}
