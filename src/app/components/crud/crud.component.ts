import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit{

user = {
  id:"",
  name: ""
}

  constructor(private userservice: UserserviceService){}
  
  ngOnInit(): void{

  }

  doCreate()
  {
    console.log("trying to create a user.");
    console.log(this.user);
    // this.userservice.createUser(this.user).subscribe(
    //   (response: any)=>{
    //     console.log(response);
    //   },
    //   (error: any)=>{
    //     console.log(error);
    //   }
    // )
  }

}
