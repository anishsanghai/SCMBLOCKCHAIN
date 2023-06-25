import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from 'src/app/services/block.service';
import { PidService } from 'src/app/services/pid.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-upadate',
  templateUrl: './upadate.component.html',
  styleUrls: ['./upadate.component.css']
})
export class UpadateComponent {
  constructor(private pid:PidService,private router:Router,private bid:BlockService){}
  async onSubmit(f:any){
    await this.pid.check(f.value.prod,'d')
    await this.pid.abc$.pipe(take(1)).subscribe(data=>{
      if(data==true){
        alert("You have already updated for this id")
      }
      else{
        this.pid.updatepid(f.value.prod)
        this.router.navigateByUrl("updateD")
        this.bid.updatepid(f.value.prod)
      }
    })

  }
}
