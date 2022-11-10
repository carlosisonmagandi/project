import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccoutService {
  private BASE_URL = environment.url
  ROOT_URL:String="http://angular-app.ap-southeast-1.elasticbeanstalk.com"
  constructor(private http:HttpClient) { }

  getAllAccount(){
     return this.http.get(`${this.BASE_URL}/account`);
    //return this.http.get(`${this.ROOT_URL}/account`);
  }

  getAccountByRole(){
    return this.http.get(`${this.BASE_URL}/account-by-role`);
   //return this.http.get(`${this.ROOT_URL}/account`);
 }

  deleteAccount(id: any){
    return this.http.delete(`${this.BASE_URL}/account/${id}`);
  }
}
