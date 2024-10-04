import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs',
  standalone: true,
  imports: [],
  templateUrl: './obs.component.html',
  styleUrl: './obs.component.scss'
})
export class ObsComponent implements OnInit,OnDestroy {
  sub!:Subscription;
  observer =new Observable((observer) => {
    setTimeout(() => {
      observer.next('Hello from Observable after 1 seconds!');
    }, 1000);
    setTimeout(() => {
      observer.next('Hello from Observable after 2 seconds!');
    }, 2000);
    setTimeout(() => {
      observer.next('Hello from Observable after 3 seconds!');
      observer.complete();
    }, 3000);
  });
  ngOnInit(): void {
    this.sub=this.observer.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observer completed!')
    })
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}


