import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ButtonBasedTransitionService {

  private activeButtonSource = new BehaviorSubject<string>('Home'); // Default value
  activeButton$ = this.activeButtonSource.asObservable(); // Observable for subscribing to changes

  setActiveButton(buttonText: string): void {
    this.activeButtonSource.next(buttonText);
  }


  constructor() { }
}
