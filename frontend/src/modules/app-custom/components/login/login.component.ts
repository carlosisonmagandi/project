import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccoutService } from '@modules/app-custom/service/accout.service';
import { HardCodedAuthenticationService } from '@modules/app-custom/service/hard-coded-authentication.service';
import {  ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentCustom implements OnInit {


 

 accountList:any
//access the property inside response  
 accountRole:any
 usernameByRole:any
 passwordByRole:any

 //variable for inputs 
  username!:string;
  password!:'';
  
  errorMessage='Invalid Credential!';
  invalidLogin=false;

  constructor(
    private router: Router,
    private hardCodedAuthentication: HardCodedAuthenticationService,
    private accountService: AccoutService
     ) { }

  
  ngOnInit(): void {
    //if logout will directly got to login page 
    this.getAll()
    this.hardCodedAuthentication.logout();
    this.getAccountByRole();
    

  }
 
  getAll(){
    this.accountService.getAllAccount().subscribe(
      response=>{
        //console.log(response)
        this.accountList=response;    
        //console.log(this.accountList)
      }
    )
  }

  getAccountByRole(){
    this.accountService.getAccountByRole().subscribe(
      response=>{
        //console.log(response);
        this.accountRole=response;
        this.usernameByRole=this.accountRole[0].username;
        this.passwordByRole=this.accountRole[0].password;
        //console.log(this.usernameByRole+this.passwordByRole)
      },error => {console.log(error);}
    )
  }

deleteAcc(id:any){
  this.accountService.deleteAccount(id).subscribe(
    response=> {
      this.getAll()
      //console.log(response)
    
    })
}



  login(){
    
    
    if(this.authenticate(this.username,this.password)){
      this.invalidLogin=false;
      this.router.navigate(['/dashboard']);
     
    }
    else{
      //console.log(this.username);
      this.invalidLogin=true;
      

    }
    
  }
  
// authentication
authenticate(username: string,password: string){
  
   if(this.usernameByRole==this.username && this.passwordByRole==this.password){
      if (username === this.username && password == this.password ) {
        sessionStorage.setItem('authenticaterUser', username);
        console.log('after ' + this.hardCodedAuthentication.isUserLoggedIn());

        return true

      }
      else {
        return false
      }
   }
    
  
 }


}
