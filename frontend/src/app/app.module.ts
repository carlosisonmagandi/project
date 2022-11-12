import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponentCustom } from '@modules/app-custom/components/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountSettingsComponent } from '@modules/app-custom/components/account-setting/account-settings.component';
import { ActivityLogsComponent } from '../modules/app-custom/components/activity-logs/activity-logs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatLabel } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableComplete } from '@modules/app-custom/components/activity-logs/LOGS/table-complete';



@NgModule({
    declarations: [AppComponent,LoginComponentCustom, AccountSettingsComponent, ActivityLogsComponent,NgbdTableComplete],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule,
        FormsModule,
        NoopAnimationsModule,
        ReactiveFormsModule, NgbModule
        
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
