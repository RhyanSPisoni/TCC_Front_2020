import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  nome: string;
  senha: string;
  loginError: boolean;
  cadastrando: boolean;
  mensagemSucesso: String;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.router.navigate(['/home'])
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario()
    usuario.username = this.nome;
    usuario.password = this.senha;
    this.authService
                    .salvar(usuario)
                    .subscribe( response => {
                      this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login.";
                      this.loginError = false;
                    }, error => {
                      this.loginError = true;
                      this.mensagemSucesso = null;
                    })
  }
}
