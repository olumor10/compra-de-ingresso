/*let qtdPista = 100;
let qtdCadeiraSuperior = 200;
let qtdCadeiraIferior = 400;

function comprar(){
    //obter os valore dos campos tipo de ingresso e Qdt
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngresso = document.getElementById('qtd').value;
    
    //decrementar a qtd comprada da qtd diponível
    if (tipoIngresso == 'pista' && qtdIngresso <= qtdPista){
        qtdPista = qtdPista - qtdIngresso;
        document.getElementById('qtd-pista').innerHTML = qtdPista; 
        return;
    } 
   
    if (tipoIngresso == 'inferior' && qtdIngresso <= qtdCadeiraIferior){
        qtdCadeiraIferior = qtdCadeiraIferior - qtdIngresso;
        document.getElementById('qtd-inferior').innerHTML = qtdCadeiraIferior; 
        return;
    }

    if (tipoIngresso == 'superior' && qtdIngresso <= qtdCadeiraSuperior){
        qtdCadeiraSuperior = qtdCadeiraSuperior - qtdIngresso;
        document.getElementById('qtd-superior').innerHTML = qtdCadeiraSuperior; 
        return;
    } else {
        if (tipoIngresso == 'pista' && qtdIngresso > qtdPista){
            alert('Quantidade indisponível para Pista!');
        }

        if (tipoIngresso == 'inferior' && qtdIngresso > qtdCadeiraIferior){
            alert('Quantidade indisponível para Cadeira Inferior!');
        }

        if (tipoIngresso == 'superior' && qtdIngresso > qteSuperior){
            alert('Quantidade indisponível para Cadeira Superior!');
        }
    }
    document.getElementById('qtd').value = '';
}*/

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (qtd <= 0 || isNaN(qtd)) {
        alert('Digite um número positivo no campo Qtde!')
    } else {
        if (tipo == 'pista') {
            comprarPista(qtd);
        } else if (tipo == 'inferior') {
            comprarInferior(qtd);
        } else {
            comprarSuperior(qtd);
        }
    }
    document.getElementById('qtd').value = '';
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert ('Quantidade indisponivel para o tipo Pista!');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!')
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert ('Quantidade indisponivel para o tipo Inferior!');
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!')
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert ('Quantidade indisponivel para o tipo Superior!');
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!')
    }
}