import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name='';
  // message='some welcome message';
  welcomeMessageFromService:string

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private welcomeService: WelcomeDataService,
  ) { }

  ngOnInit(): void {
    // this.route.snapshot.params['name']
    this.name=this.route.snapshot.params['name']
  }

 





}
