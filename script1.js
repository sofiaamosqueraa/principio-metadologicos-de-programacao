function exibirDados() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `Nome: ${nome}<br>Idade: ${idade}`;
}
