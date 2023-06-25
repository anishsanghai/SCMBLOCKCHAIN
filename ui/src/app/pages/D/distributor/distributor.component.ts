import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent {
  constructor( private authservice: AuthService ){}
  onLogOut(){
    this.authservice.logout()
  }
}
