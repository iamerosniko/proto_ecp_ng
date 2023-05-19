import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  form: FormGroup;
  years: number[] = [];
  tabs: any[] = [];
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  excelIcon=faFileExcel;
  isMonthsReady:boolean=false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.populateYears();
    this.populateTabs();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      team: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 2019;

    for (let year = startYear; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  populateTabs(){
    var i=0;
    this.months.forEach(element => 
    {
      this.tabs.push(
        {title: element,}
      );
      i++;
      if(i>11){
        this.isMonthsReady=true;
      }
    });
  }

  onSubmit() {
    // Handle form submission here
    if (this.form.valid) {
      console.table(this.form.value)
      console.log(this.form.value)
    }
  }
}
