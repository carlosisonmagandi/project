import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { Account } from '../model/account.model';
import {AccoutService } from '../service/accout.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import {  ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newData: Array<any> = [];
 

 accountList:any

  username:string;
  password:'';

  usernameValue:any
  passwordValue:any

  
  errorMessage='Invalid Credential!';
  invalidLogin=false;


  displayUsername=false;
  constructor(
    private router: Router,
    private hardCodedAuthentication: HardCodedAuthenticationService,
    private accountService: AccoutService
     ) { }

  
  ngOnInit(): void {
    //if logout will directly got to login page 
    this.getAll()
    this.hardCodedAuthentication.logout();

    console.log(this.selectedUsername)
    console.log(this.selectedPassword)

  }
 
  getAll(){
    this.accountService.getAllAccount().subscribe(
      response=>{
        console.log(response)
        this.accountList=response;
        this.newData['records']=response     
        let myJSON = JSON.stringify(response);
        console.log(this.accountList)
      }
    )
  }

deleteAcc(id){
  this.accountService.deleteAccount(id).subscribe(
    response=> {
      this.getAll()
      console.log(response)
    
    })
}
//fetch the value of hidden input element
@ViewChild('usernameInputVal') usernameInputVal!: ElementRef;
@ViewChild('passwordInputVal') passwordInputVal!: ElementRef;
selectedUsername='';
selectedPassword = '';

  login(){
    
    console.log(this.accountList)

    
    this.selectedUsername = this.usernameInputVal.nativeElement.value;
    this.selectedPassword = this.passwordInputVal.nativeElement.value;
   

    if(this.authenticate(this.username,this.password)){
      this.invalidLogin=false;
      this.displayUsername=true;
   
      this.router.navigate(['welcomeAdmin', this.username]);
     
    }
    else{
      //console.log(this.username);
      this.invalidLogin=true;
      this.displayUsername=false;
      
    }
    
  }
  
// authentication
authenticate(selectedUsername,selectedPassword){
   console.log('test of selected username')
   console.log(this.selectedUsername)
   console.log(this.selectedPassword)
   
    if (selectedUsername === this.selectedUsername && selectedPassword == this.selectedPassword ) {
      sessionStorage.setItem('authenticaterUser', selectedUsername);
      console.log('after ' + this.hardCodedAuthentication.isUserLoggedIn());

      return true

    }
    else {
      return false
    }
  
 }


}
