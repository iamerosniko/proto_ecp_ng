import { Component } from '@angular/core';
import { faTrash, faSave, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  fatrash=faTrash;
  fasave=faSave;
  faadd=faPlusCircle;
}
