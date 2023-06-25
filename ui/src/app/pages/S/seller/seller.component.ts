import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  constructor( private authservice: AuthService ){}
  onLogOut(){
    this.authservice.logout()
  }
}
