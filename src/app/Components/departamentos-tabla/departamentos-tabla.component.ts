import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-departamentos-tabla',
  templateUrl: './departamentos-tabla.component.html',
  styleUrls: ['./departamentos-tabla.component.css']
})
export class DepartamentosTablaComponent {
  @Input('Data') Datos:any;
}
