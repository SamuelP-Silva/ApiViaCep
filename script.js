const botao = document.getElementById('btn')

botao.addEventListener('click',consultaEndereço)

function consultaEndereço() {
    let cep = document.getElementById('cep').value;

    if(cep.length !== 8){
     alert('CEP Inválido');
     return;
    }

    let url =  `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
         response.json().then(mostrarEndereço);
         })
    };
 

 function mostrarEndereço(dados) {
     let resultado = document.getElementById('resultado');
     if(dados.erro) {
         resultado.innerHTML = "O endereço não foi localizado!"
     } else{

     resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`

     }
 }