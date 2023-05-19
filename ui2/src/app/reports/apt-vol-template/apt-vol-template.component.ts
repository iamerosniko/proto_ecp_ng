import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apt-vol-template',
  templateUrl: './apt-vol-template.component.html',
  styleUrls: ['./apt-vol-template.component.css']
})
export class AptVolTemplateComponent implements OnInit {

  @Input() months:any;

  constructor() { }

  ngOnInit(): void {
  }

}
