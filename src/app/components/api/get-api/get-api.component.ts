import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any [] = [];
  customerList: any [] = [];


  constructor(private http: HttpClient){
    this.getAllUser();
  }

  getAllUser(){

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    this.userList = res;
    });
  }

  getAllCustomer(){

    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
    this.userList = res.data;
    },error=>{
      debugger;
    });
  }


}
