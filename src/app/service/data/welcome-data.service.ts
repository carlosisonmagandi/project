import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean{
  constructor(public message:string){}
}

export class navigateToHome{
  constructor(public msg:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  
  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log("get welcome message")
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("get welcome message")
  }

  navigateToHome(name){
    return this.http.get<navigateToHome>(`http://localhost:8080/home/${name}`);
    // console.log("get welcome message")
  }


}
