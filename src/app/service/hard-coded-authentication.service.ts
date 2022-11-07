import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import {AccoutService } from '../service/accout.service';
@Injectable({
  providedIn: 'root'
})

export class HardCodedAuthenticationService {



   username='admin'
   password='admin'
  //accountrole='Admin'
 

 
  authenticate(username,password){
   // console.log('before ' + this.isUserLoggedIn());
  
     if (username === this.username && password == this.password ) {
       sessionStorage.setItem('authenticaterUser', username);
       console.log('after ' + this.isUserLoggedIn());

       return true

     }
     else {
       return false
     }
   
  }

  isUserLoggedIn(){
   let user=sessionStorage.getItem('authenticaterUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }


}
