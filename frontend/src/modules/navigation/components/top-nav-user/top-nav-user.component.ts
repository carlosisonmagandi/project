import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccoutService } from '@modules/app-custom/service/accout.service';
import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
        //access the property inside response  
 accountRole:any
 usernameByRole:any
 passwordByRole:any
 roleByRole:any

    constructor(public userService: UserService,
        private router: Router,
    private accountService: AccoutService
      ) {}
    ngOnInit() {
        this.getAccountByRole()
    }

   
  getAccountByRole(){
    this.accountService.getAccountByRole().subscribe(
      response=>{
        //console.log(response);
        this.accountRole=response;
        this.usernameByRole=this.accountRole[0].username;
        this.passwordByRole=this.accountRole[0].password;
        this.roleByRole=this.accountRole[0].role;
        console.log(this.usernameByRole+this.passwordByRole)
      },error => {console.log(error);}
    )
  }




}
