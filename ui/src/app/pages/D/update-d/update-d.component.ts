import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from 'src/app/services/block.service';
import { PidService } from 'src/app/services/pid.service';
@Component({
  selector: 'app-update-d',
  templateUrl: './update-d.component.html',
  styleUrls: ['./update-d.component.css']
})
export class UpdateDComponent {
  constructor(private pid:PidService,private bid:BlockService,private router: Router){}
 async onSubmit(f:any){
    await this.pid.updateDate(f.value)
    await this.bid.distributor(Object.values(f.value))
    await this.router.navigateByUrl('distributor')
  }

}
