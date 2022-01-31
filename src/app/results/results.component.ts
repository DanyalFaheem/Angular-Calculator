import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: number[] = [];
  constructor(private resultService: ResultsService) { }

  ngOnInit(): void {
    this.getResults();
  }
  getResults() {
    this.resultService.getResults().subscribe(result => this.results = result);
  }
}
