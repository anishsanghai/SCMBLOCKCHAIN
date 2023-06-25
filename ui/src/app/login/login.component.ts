import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private authService:AuthService){}

  onSubmit(formvalues:any){
    console.log(formvalues.value.Email)
  this.authService.login(formvalues.value.Email,formvalues.value.password)
}
}
