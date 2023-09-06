import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseURL:string ="http://localhost:8181/springMVCProject"

  constructor(private http:HttpClient) { }

  createUser(user: any)
  {
    console.log(user.name);
    return this.http.post('${this.baseURL}/savedUser', user);
  }
}
