import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string , number ,boolean, date

  courseName: string = "Angular 18";
  stateName: string = "";
  firstName = signal("chinton");
  inputType = "text";
  rollNum: number = 123;
  isValid : boolean = false;
  currentDate: Date = new Date();


  constructor(){

  }

  ShowAlart(message: string){
    alert(message);
  }

  ChangeMessage(){
    this.courseName = "React Js";
    this.firstName.set("Shachin Tendulkar");
  }

}
