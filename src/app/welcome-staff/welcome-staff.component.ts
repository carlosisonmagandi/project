import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome-staff',
  templateUrl: './welcome-staff.component.html',
  styleUrls: ['./welcome-staff.component.css']
})
export class WelcomeStaffComponent implements OnInit {
  name='';
  // message='some welcome message';
  welcomeMessageFromService:string

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private welcomeService: WelcomeDataService,
  ) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name']
  }

}
