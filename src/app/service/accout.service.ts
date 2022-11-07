import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccoutService {
  private BASE_URL = environment.production
  constructor(private http:HttpClient) { }

  getAllAccount(){
    return this.http.get(`${this.BASE_URL}/account`);
  }
  deleteAccount(id){
    return this.http.delete(`${this.BASE_URL}/account/${id}`);
  }
}
