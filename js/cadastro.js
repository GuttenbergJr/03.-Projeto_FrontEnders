// linkando o viaCep e fazendo os inputs atualizarem quando sair do input cep

const preencherautomatico = (endereco) => {
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('rua').value = endereco.logradouro;
}


const pesquisarCep = async () => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`

    const informacoes = await fetch(url);
    const endereco = await informacoes.json();
    preencherautomatico(endereco);

    if (endereco.hasOwnProperty('erro')) {
        alert('Cep não encontrado')
    }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep)


function concluirCompra() {

    const input = document.getElementsByClassName('inputText');


    if (input != " ") {
        alert('Compra Efetuada! Visite seu E-mail para mais detalhes')

    }

}

