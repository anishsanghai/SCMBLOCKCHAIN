import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from 'src/app/services/block.service';
import { PidService } from 'src/app/services/pid.service';
@Component({
  selector: 'app-upadate-s',
  templateUrl: './upadate-s.component.html',
  styleUrls: ['./upadate-s.component.css']
})
export class UpadateSComponent {
  constructor(private pid:PidService,private bid:BlockService,private router:Router){}
  async onSubmit(f:any){
    await this.pid.updateDate(f.value)
    await this.bid.retailer(Object.values(f.value))
    await this.router.navigateByUrl('seller')
  }
}
