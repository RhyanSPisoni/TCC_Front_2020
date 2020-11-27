import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  nome: string;
  email: string;
  senha: string;
  loginError: boolean;
  

  constructor() { }

  onSubmit(){
    console.log(' Dados: User', this.nome, ' email ', this.email, ' senha ', this.senha)
  }
}
