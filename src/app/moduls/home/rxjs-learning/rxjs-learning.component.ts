import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent {
  agents : Observable<string> = of('hamed');
  agentName : string = '';

  ngOnInit(): void {
    this.agents = new Observable ( (observe) => {
      try {

        setInterval(() => {
          observe.next('hadi');
        },2000);
        setInterval(() => {
          observe.next('reza');
        },5000);
        setInterval(() => {
          observe.next('sara');
        },8000);

      } catch (e) {
        observe.error(e)
      }
    });
    
    
    this.agents.subscribe( data => {
      console.log('data = ', data);
      this.agentName = data;
      
    })
  }

}
