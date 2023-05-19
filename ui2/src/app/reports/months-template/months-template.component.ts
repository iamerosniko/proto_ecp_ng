import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-months-template',
  templateUrl: './months-template.component.html',
  styleUrls: ['./months-template.component.css']
})
export class MonthsTemplateComponent implements OnInit {

  @Input() test:any;
  constructor() { }

  ngOnInit(): void {
  }

}
