import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  form: FormGroup;
  years: number[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.populateYears();
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

  onSubmit() {
    // Handle form submission here
    if (this.form.valid) {
      console.table(this.form.value)
      console.log(this.form.value)
    }
  }
}
