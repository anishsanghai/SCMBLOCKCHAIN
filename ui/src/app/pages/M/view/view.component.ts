import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from 'src/app/services/block.service';
import { PidService } from 'src/app/services/pid.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private pid:PidService,private router:Router,private bid:BlockService){}
  onSubmit(f:any){
    this.pid.sendData(f.value.prod)
    this.router.navigateByUrl("ViewPage")
    //this.bid.detret(f.value.prod)
  }
}
