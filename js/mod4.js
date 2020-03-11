//Exercicio 1

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(idade >= 18){
                resolve()
            } else {
                reject()
            }
        }, 2000)
    });
}

checaIdade(20)
.then(function() {
    console.log('Maior que 18');
})
.catch(function(error){
    console.log('Menor que 18');
});


//Exercício 2
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var novaLista = document.createElement('ul');
buttonElement.onclick = function() {
    var inputText = inputElement.value;
    carregando();
    axios.get('https://api.github.com/users/' + inputText + '/repos')
    .then(function  (response) {
        novaLista.innerHTML = '';
        for (dados of response.data) {
            var itemLista = document.createElement('li');
            itemLista.innerHTML = dados.name;
            novaLista.appendChild(itemLista);
        }
        document.body.insertBefore(novaLista, null); 
    })
    .catch(function(error){
        alert('Usuário não existe');
        /*novaLista.innerHTML = '';
        var itemLista = document.createElement('li');
        itemLista.innerHTML = 'Usuário não existe';
        novaLista.appendChild(itemLista);
        document.body.insertBefore(novaLista, null); */
    });
}

//Exercício 3
function carregando() {
    novaLista.innerHTML = "";
    var textElement = document.createTextNode("Carregando...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(textElement);
    novaLista.appendChild(loadingElement);
  }

