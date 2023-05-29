import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-uniaca-tabla',
  templateUrl: './uniaca-tabla.component.html',
  styleUrls: ['./uniaca-tabla.component.css']
})
export class UniacaTablaComponent {
  @Input('Data') Datos:any;
}
