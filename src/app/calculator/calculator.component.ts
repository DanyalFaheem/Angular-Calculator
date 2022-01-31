import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  Error: string = '';
  input: string = '';
  resultCalculated: boolean = false;
  result: number = 0;
  bracketsMismatch: boolean = false;
  constructor(private resultService: ResultsService) { }
  Clear() {
    this.input = '';
  }
  operatorClick(value: string) {
    this.bracketsMismatch = false;
    if(this.resultCalculated) {
      this.input = <string><unknown>this.result;
      this.input += value;
      this.resultCalculated = false;
    }
    if (value === '(' || value === ')') {
      this.input += value;
    }
    else if(this.input[this.input.length - 1] != '*' && 
    this.input[this.input.length - 1] != '/' && 
    this.input[this.input.length - 1] != '-' && 
    this.input[this.input.length - 1] != '+' && 
    this.input[this.input.length - 1] != '.' && this.input.length !== 0) {
      this.input += value;
    }
  }
  numberClick(value: string) {
    if (this.input === '' && value === '0') {
      console.log(this.input)
    }
    else {
      if (this.input.indexOf(".") !== -1 && value === '.') {
        console.log(this.input)
      }
      else {
        this.input += value;
        console.log(this.input)
      }
    }
  }
  calculateResult() {
    if (this.input.replace(/[^(]/g, "").length !== (this.input.replace(/[^)]/g, "").length)) {
      this.Error = "Brackets Mismatch!"
      this.bracketsMismatch = true;
    }
    this.result = eval(this.input.trim());
    if (this.result) {
      this.resultCalculated = true;
      this.resultService.results.unshift(this.result);
      this.bracketsMismatch = false;
    }
    else {
      this.Error = "Syntax Error"
      this.bracketsMismatch = true;
    }
    console.log(this.result)
  }
  clearDigit() {
    this.input = this.input.substring(0, this.input.length - 1);
  }
  ngOnInit(): void {
  }

}
