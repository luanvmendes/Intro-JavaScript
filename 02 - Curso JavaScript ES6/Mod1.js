class Usuario{
    constructor(email, senha) {

    }
}

class Admin extends Usuario {
    constructor() {
        super('teste@email.com', 'abc123');
        this.Admin = true;
    }
}