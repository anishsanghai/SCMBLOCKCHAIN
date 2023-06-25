import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin:boolean=false;
  constructor(private auth:Auth,private router:Router){
  }
  login(email:string,password:string){
    signInWithEmailAndPassword(this.auth,email,password).then(result=>{
      this.isLoggedin=true;
      const user = result.user;
      if (user.email=='m@gmail.com'){
        this.router.navigateByUrl('manufacturer')
      }
      else if(user.email=='s@gmail.com'){
        this.router.navigateByUrl('seller')
      }
      else{
        this.router.navigateByUrl('distributor')
      } 
    })
    .catch((error) => {
      alert("Incorrect password or email please try again")
    });

  }
  logout(){
    this.auth.signOut().then(()=>{
      this.isLoggedin=false;
      this.router.navigateByUrl('/')
      window.alert("Logged Out!")
    })
  }
}
