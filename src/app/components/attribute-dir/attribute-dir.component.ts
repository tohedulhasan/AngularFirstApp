import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  
  div1Color: string = "bg-danger";
  isDiv2Active: boolean = true;
  num1: string = '';
  num2: string = '';
  isActiveDiv4: boolean = false;

  arrStudents: any[] = [
    {id:23, gender:'male', marks: '64', name: 'AA', city: 'pune', isActive: false},
    {id:33, gender:'female', marks: '24', name: 'BB', city: 'mumbai', isActive: true},
    {id:43, gender:'male', marks: '98', name: 'CC', city: 'chennai', isActive: false},
    {id:63, gender:'female', marks: '50', name: 'DD', city: 'dilli', isActive: true},
  ]

  customStyle: any = {
    'background-color':'red',
    'color':'white',
    'width': '200px',
    'height': '100px'
    }

  addRedColor(){
    this.div1Color = "bg-danger";   
  }

  addBlueColor(){
    this.div1Color = "bg-primary";   
  }

  toggleClick(){
    this.isDiv2Active = !this.isDiv2Active;
  }
 
}
