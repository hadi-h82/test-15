import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

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
  
  _chatSubscription :any;
  students$ : Observable<string[]> = of(this.studentsList);
  studentsByFromOperator$ : Observable<string> = from(this.studentsList);
  studentName$ : Observable<string> = of('babak');
  studentObservableObj$ : Observable<any> = of(this.studentObj);
  @ViewChild('Btn')
  validate :ElementRef = {} as ElementRef;

  ngOnInit(): void {
    
    this._chatSubscription = this.students$.subscribe((data) => {
      console.log(data);
    });
    
    this._chatSubscription = this.studentName$.subscribe((data) => {
      console.log(data);
    });
    this._chatSubscription = this.studentObservableObj$.subscribe((data) => {
      console.log(data);
    });
    this._chatSubscription = this.studentsByFromOperator$.subscribe((data) => {
      console.log(data);
    });

  }

  rxjsEventObservable(){
    const btnObservable$ :Observable<any> = fromEvent(this.validate.nativeElement,'click');

    this._chatSubscription = btnObservable$.subscribe(data => {

      console.log(data)
      this._chatSubscription.unsubscribe();
    }
    )
 
  }



}
