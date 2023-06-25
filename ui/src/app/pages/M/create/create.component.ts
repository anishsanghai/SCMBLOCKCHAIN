import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BlockService } from 'src/app/services/block.service';
import { PidService } from 'src/app/services/pid.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private firestore:Firestore,private bid:BlockService,private router:Router,private pid :PidService){ }
  async onSubmit(data:any){
   await this.pid.addData(data.value)
   await this.bid.manufacturer(Object.values(data.value))
   this.router.navigateByUrl('manufacturer')    
  }

}
