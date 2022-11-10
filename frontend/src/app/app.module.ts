import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponentCustom } from '@modules/app-custom/components/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountSettingsComponent } from '@modules/app-custom/components/account-setting/account-settings.component';
import { ActivityLogsComponent } from '../modules/app-custom/components/activity-logs/activity-logs.component';


@NgModule({
    declarations: [AppComponent,LoginComponentCustom, AccountSettingsComponent, ActivityLogsComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
