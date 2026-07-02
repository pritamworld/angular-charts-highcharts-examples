import { Component, inject } from '@angular/core';
import { CounterState } from '../services/counter-state';

@Component({
  selector: 'app-awesome-counter',
  imports: [],
  templateUrl: './awesome-counter.html',
  styleUrl: './awesome-counter.css',
})
export class AwesomeCounter {
  state = inject(CounterState);

  // Expose the readonly count signal to the template readonly
  count = this.state.count;

  // Method to increment the count
  increment() {
    this.state.increment();
  }
  
}
