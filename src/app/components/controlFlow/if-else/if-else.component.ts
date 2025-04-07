import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-if-else',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  div1Color: string = 'bg-danger';

  isDiv1Show: boolean = true;
  isDiv2Show: boolean = false;
  isActive: boolean = true;

  num1: string = '';
  num2: string = '';

  selectedValue: string = '0';
  selectedItem: string = '0';
  weekValue: number = 0;

  arrStudents: any[] = [
    {id:23, gender:'male', marks: '64', name: 'AA', city: 'pune', isActive: false},
    {id:33, gender:'female', marks: '24', name: 'BB', city: 'mumbai', isActive: true},
    {id:43, gender:'male', marks: '98', name: 'CC', city: 'chennai', isActive: false},
    {id:63, gender:'female', marks: '50', name: 'DD', city: 'dilli', isActive: true},
  ]

  showDiv(){
    this.isDiv1Show = true;
  }

  hideDiv(){
    this.isDiv1Show = false;
  }

  toggleShow(){
    this.isDiv2Show = !this.isDiv2Show;
  }
}
