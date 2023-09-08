import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit{

// user = {
//   id:"",
//   name: ""
// }

name: any;

dataForm!: FormGroup;

  constructor(
    private userservice: UserserviceService,
    private fb: FormBuilder
    //private http: HttpClient
    ){}
  
  data:any;
  ngOnInit(): void{

    this.dataForm = this.fb.group({
      count: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl('')
    });

    // var tempResponse = this.userservice.getdata()
    //  .subscribe(
    //   (response: any) => {console.log(response);}
    //   //,(error: any) => {console.log(error);}
    // );
    // this.data =tempResponse;
    // console.log("this.data ",this.data );

    // console.log("this.data",this.data)
    // console.log("this.data.count",this.data?.count)
    // this.dataForm.patchValue({
    //   count:this.data.count
    // });


  }

  doCreate()
  {
    console.log("trying to create a user.");
    console.log(this.name);
    let user = {name:this.name}
    console.log(user);
      this.userservice.createUser(user)
      .subscribe(
        (response: any)=>{
          console.log(response);
       },
       (error: any)=>{
         console.log(error);
       }
     )
  }

  doGet(
    name: any)
  {
    // console.log("I am in crud component method.");
    // var tempResponse = this.userservice.getdata()
    //  .subscribe(
    //   (response: any) => {console.log(response);}
    //   //,(error: any) => {console.log(error);}
    // );

    // console.log("response inside component.")
    // console.log(tempResponse);
    this.userservice.getdata(this.name).subscribe({
      next:(response:any)=>{
        this.data =response
        console.log("this.data",this.data)
        console.log("this.data.count",this.data.count)
        this.dataForm.patchValue({
          count:this.data.count,
          name:this.data.name,
          age:this.data.age
        });
      }
    })

  }

  // gettheHello()
  // {
  //   this.userservice.getHello().subscribe(
  //     {
  //       next:(response:any)=>
  //       {
  //         this.data =response
  //         console.log("this.data",this.data)
  //       }
  //     });
  // }
}
