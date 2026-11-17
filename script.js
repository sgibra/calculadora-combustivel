function verificarCombustivel(e){
    
    //Prevenindo o comportamento padrão de quem acionou a função
    e.preventDefault();
    // console.log(e);

    let gasolina = document.getElementById('gasolina').value;
    let etanol = document.getElementById('etanol').value;
    let resposta = document.getElementById('resposta');

    //console.log(gasolina);
    //console.log(etanol);

    let resultado = etanol/gasolina;

    if(resultado < 0.7){
       // alert('Abasteça com Etanol');
       resposta.innerHTML = '<h2>Abasteça com Etanol</h2>';

    }

    else{
        // alert('Abasteça com Gasolina');
        resposta.innerHTML = '<h2>Abasteça com Gasolina</h2>';
    }
}

