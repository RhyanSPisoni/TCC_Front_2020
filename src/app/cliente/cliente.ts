export class Cliente {
    
    id: number;
    nome: string;
    email: string;
    senha: string;
    carteira: number;
    compras: number;      

    constructor(nome: string, email: string, senha: string, carteira: number, compras: number){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.carteira = carteira;
        this.compras = compras;
    }
}