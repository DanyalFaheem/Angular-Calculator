import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  results: number[] = [];
  getResults() {
    return of(this.results);
  }
  constructor() { }
}
