import { Component } from '@angular/core';
import { take } from 'rxjs';
import { PidService } from 'src/app/services/pid.service';

@Component({
  selector: 'app-viewingpage',
  templateUrl: './viewingpage.component.html',
  styleUrls: ['./viewingpage.component.css']
})
export class ViewingpageComponent {
constructor(private pid:PidService){
  this.pid.data$.pipe(take(1)).subscribe(data => {
    const se=Object.values(data)
    let output=''
    for (const key in se[0]){
      output+=`
      <div class="row ">
      <div class="col">
      ${key}
      </div>
      <div class="col">
      :
      </div>
      <div class="col">
      ${se[0][key]}
      </div>
      </div> `
    }
    const b =document.getElementById('p') as HTMLDataElement
    b.innerHTML=output
    });

}

}
