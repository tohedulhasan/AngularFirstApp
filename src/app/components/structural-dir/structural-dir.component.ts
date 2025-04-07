import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

constructor(private router: Router){

}
  

  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = true;
  isActive: boolean = true;
  selectedValue: string = '2';

  num1: string = '';
  num2: string = '';

  arrStates: string [] = ['Pune', 'Mumbai', 'Dilli', 'Nagpur']

  arrStatesDic: { label: string; value: string }[] = [
    { label: '--select--', value: '' },
    { label: 'Pune', value: 'pune' },
    { label: 'Mumbai', value: 'mumbai' },
    { label: 'Dilli', value: 'dilli' },
    { label: 'Nagpur', value: 'nagpur' }
  ];

  arrf: {label: string; value: string;}[] = 
  [
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Nagpur', value: 'Nagpur'},
    {label: 'Pune', value: 'pune'}
  ];

  selectedCity: string = ''; // To store selected value


  arrStudents: any[] = [
    {id:23, name: 'AA', city: 'pune', isActive: false},
    {id:33, name: 'BB', city: 'mumbai', isActive: true},
    {id:43, name: 'CC', city: 'chennai', isActive: false},
    {id:63, name: 'DD', city: 'dilli', isActive: true},
  ]


  navigateToAttribute() {
    this.router.navigateByUrl('/attribute-dir');  // ✅ Ensure the route starts with "/"
  }

  showDiv(){
    this.isDiv1Visible = true;
  }
  hideDiv(){
    this.isDiv1Visible = false;
  }
  toggleClick(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
