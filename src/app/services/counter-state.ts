import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterState {
  // Private writable state
  private readonly _count = signal(0);
  readonly count = this._count.asReadonly(); // public readonly

  // Method to increment the count
  increment() {
      this._count.update((v) => v + 1);
  }
}
