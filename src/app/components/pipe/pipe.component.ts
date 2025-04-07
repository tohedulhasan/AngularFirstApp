import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe, AsyncPipe, JsonPipe, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  pipeStr: string = 'This is demo session';
  currentDate: Date = new Date();
  currentTime: Observable<Date> = new Observable<Date>;

  studentObj: any = {
    name: 'Mic',
    city: 'alberta',
    state: '',
    empId: 34
  }

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }


}
