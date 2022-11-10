import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import {AccoutService } from '../service/accout.service';
@Injectable({
  providedIn: 'root'
})

export class HardCodedAuthenticationService {



  isUserLoggedIn(){
   let user=sessionStorage.getItem('authenticaterUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }


}
