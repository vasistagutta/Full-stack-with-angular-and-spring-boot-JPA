import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{

  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/helloWorld`);
  }
  
  executeHelloWorldBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`${API_URL}/helloWorld/${name}`
   // ,{headers:header}
    );
  }
  
  // createBasicAuthenticationHeader(){
  //   let username ='vasista';
  //   let password = 'Hello';
  //   let basicAuthHeaderString = 'Basic '+window.btoa(username + ':'+ password);
  //   return basicAuthHeaderString;
  // }

  //Access to XMLHttpRequest at 'http://localhost:8080/helloWorld/vasista' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
