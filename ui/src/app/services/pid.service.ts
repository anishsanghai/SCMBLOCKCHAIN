import { Injectable } from '@angular/core';
import {Firestore,collection,collectionData,doc, updateDoc,addDoc } from '@angular/fire/firestore';
import { Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PidService {
  constructor(private firestore:Firestore) { }
  private dataSubject: Subject<object> = new Subject<object>();
  public data$ = this.dataSubject.asObservable();
  private abc: Subject<boolean>=new Subject<boolean>();
  public abc$=this.abc.asObservable();
  pd:string|undefined
  addData(data:any){
    collectionData(collection(this.firestore,'Dbase')).pipe(take(1)).subscribe(val =>{
      const se=val.filter(item => item['ID']==data.ID);
      try{
        console.log(se[0]['ID'])
        alert("Data not added because this ID already exists")
      }
      catch{
        addDoc(collection(this.firestore,'Dbase'),data).then(()=>{
          console.log("data added")
        })
        .catch((err)=>{
          console.log(err);
       })
      }
    });

  }
  sendData(data: string) {
    collectionData(collection(this.firestore,'Dbase')).subscribe(val =>{
      const se=val.filter(item => item['ID']==data);
      this.dataSubject.next(se);
    });
    
  }
 async check(dat:any,s:any){
    await collectionData(collection(this.firestore,'Dbase')).subscribe(val =>{
      const se=val.filter(item => item['ID']==dat);
      try{
         if(s=='d'){
          this.abc.next( se[0].hasOwnProperty('Quality of Meat Distributor'))
        }
        else{this.abc.next( se[0].hasOwnProperty('Refrigirator System Seller'))}
        
      }
      catch(err){
        alert("this data does not exist")
      }
    });

  }
  updatepid(dat:any){
    this.pd=dat
  }
  updateDate(data:any){
   // this.pid$.subscribe(val=>{
     // collectionData(collection(this.firestore,'Dbase'),{idField:'id'}).subscribe(abc =>{
       // const se=abc.filter(item => item['ID']==val);
        //updateDoc(doc(this.firestore,'Dbase',se[0]['id']),data)
      //});
    //})
    const a =collectionData(collection(this.firestore,'Dbase'),{idField:'id'})
    a.pipe(take(1)).subscribe(abc =>{
       const se=abc.filter(item => item['ID']==this.pd);
      updateDoc(doc(this.firestore,'Dbase',se[0]['id']),data).then(()=>{
        console.log("data updated")

    })
    .catch((err)=>{
      console.log(err)
      alert(err)
    })
  })

}

}
