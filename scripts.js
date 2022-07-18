function calculateTip(event) {
    event.preventDefault(); // Não carrega a página, evita o default
    // Pegando o valor dos inputs e selecte pelo id
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numofPeople = document.getElementById('people').value;

    // Condicional para não permitir a submição sem preencher os campos
    if(bill == '' | serviceQual == 0){
        alert('Por favor, preencha os valores.');
        return;
    }

    // Condição para exibir o cada se for mais de um dividindo a conta
    if(numofPeople == '' | numofPeople <= 1) {
        numofPeople = 1;
        document.getElementById('each').style.display = "none";
    }
    else {
        document.getElementById('each').style.display = "block";
    }

    // Calcula da gorjeta
    let total = (bill * serviceQual)/numofPeople;
    total = total.toFixed(2);

    // Exibe o valor da gorjeta
    document.getElementById('tip').innerHTML = total;
    // Permite exibir o total-tip
    document.getElementById('total-tip').style.display = "block";

}

// Funções para deixar oculto o valor da gorjeto ate o mesmo ser calculado
document.getElementById('total-tip').style.display = "none";
document.getElementById('each').style.display = "none";

// Realiza o evento de calcular por meio da chamada da função
document.getElementById('tips-form').addEventListener('submit', calculateTip);
