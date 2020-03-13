//Exercicio 1
class Usuario{
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

//Exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const UserAge = usuarios.map(x => x.idade);

console.log(UserAge);

const filter = usuarios.filter(x => x.empresa === 'Rocketseat' && x.idade > 18);

console.log(filter);

const encontraEmpresa = usuarios.find(x => x.empresa === 'Google');

console.log(encontraEmpresa);

const duplicaIdade = usuarios.map(users => ({...users, idade: users.idade*2}));
const filtraIdade = duplicaIdade.filter(x => x.idade <= 50);
console.log(filtraIdade);