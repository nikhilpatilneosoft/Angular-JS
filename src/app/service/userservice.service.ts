import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable(
  { providedIn: 'root'}
  )
export class UserserviceService {

  private baseURL:string ="http://localhost:8181/springMVCProject"

  constructor(private http: HttpClient) { }

  // createUser(user: any)
  // {
  //   console.log(user.name);
  //   return this.http.post('${this.baseURL}/savedUser');
  //   .map((response: Response) => response.json());
  // }

  createUser(form: any) {
    console.log("entered in create service");
    return this.http.post("http://localhost:8181/springMVCProject/savedUser", form).pipe(map((response: any) => response));
  }

  getdata(name: any)
  {
    console.log("I am in User service method.");
    var tempResponse = this.http.get("https://api.agify.io/?name="+name).pipe(map((response: any) => response));
    console.log("This response is in service");
    console.log(tempResponse);
    return tempResponse;
  }

  getHello()
  {
    return this.http.get("http://localhost:8181/springMVCProject/savedUser").pipe(map((response: any) => response));
  }
}
