import { Component } from '@angular/core';
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  fatrash=faTrash;
  fasave=faSave;
}
