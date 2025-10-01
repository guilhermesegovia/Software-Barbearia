import { error } from "console"

export class User {
    constructor(
        private id: string,
        private nome: string,
        private telefone: string,
        private email: string,
        private senha: string,
        private idade?: number
    ) {
        if (!nome) throw new Error ("Nome Obrigatório");
        if (!telefone) throw new Error ("Telefone Obrigatório");
        if (!email) throw new Error ("Email Obrigatório");
        if (!senha) throw new Error ("Senha Obrigatória");

        if (nome.length < 3) throw new Error ("Nome muito curto");
        if (senha.length <6) throw new Error ("Senha muito Curta");
    }

    static create(nome: string, telefone: string, email: string, senha: string, idade?: number) {
        const id = crypto.randomUUID();
        return new User(id, nome, telefone, email, senha, idade);
    }

    getId(): string {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getTelefone(): string {
        return this.telefone;
    }

    getIdade(): number | undefined {
        return this.idade;
    }

    getEmail(): string {
        return this.email;
    }

    getSenha(): string {
        return this.senha;
    }
}
