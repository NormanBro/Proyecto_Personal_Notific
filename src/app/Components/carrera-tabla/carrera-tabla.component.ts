import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-carrera-tabla',
  templateUrl: './carrera-tabla.component.html',
  styleUrls: ['./carrera-tabla.component.css']
})
export class CarreraTablaComponent {
  @Input('Data') Datos:any;

}
