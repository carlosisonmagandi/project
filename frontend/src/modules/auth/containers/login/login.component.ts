import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccoutService } from '@modules/app-custom/service/accout.service';
import { HardCodedAuthenticationService } from '@modules/app-custom/service/hard-coded-authentication.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    accountList:any
    ngOnInit() {
    //if logout will directly got to login page 
   

  }
 
 
}

