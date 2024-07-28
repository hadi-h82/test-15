import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning01',
  templateUrl: './rxjs-learning01.component.html',
  styleUrls: ['./rxjs-learning01.component.scss']
})
export class RxjsLearning01Component implements OnInit{


  studentsList = ['ali','reza','hamed','sara'];
  studentObj = {
    id : 6,
    name : 'fati'
  }
  students$ : Observable<string[]> = of(this.studentsList);
  studentsByFromOperator$ : Observable<string> = from(this.studentsList);
  studentName$ : Observable<string> = of('babak');
  studentObservableObj$ : Observable<any> = of(this.studentObj);

  ngOnInit(): void {
    
    this.students$.subscribe((data) => {
      console.log(data);
    });
    
    this.studentName$.subscribe((data) => {
      console.log(data);
    });
    this.studentObservableObj$.subscribe((data) => {
      console.log(data);
    });
    this.studentsByFromOperator$.subscribe((data) => {
      console.log(data);
    });

  }



}
