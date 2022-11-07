import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  
  placeAccount={
    id:"",
    username:"",
    password:""
   }
   

  ngOnInit(): void {
  }

  @ViewChild('teams') teams!: ElementRef;
	selectedTeam = '';
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
	}
  onClickSubmit(placeAccount){
    console.log(this.selectedTeam)
    alert(placeAccount.username)
  }

}
