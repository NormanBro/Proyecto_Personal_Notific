import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUnidadComponent } from '../dialog-add-unidad/dialog-add-unidad.component';

@Component({
  selector: 'app-uniaca-tabla',
  templateUrl: './uniaca-tabla.component.html',
  styleUrls: ['./uniaca-tabla.component.css']
})
export class UniacaTablaComponent {
  @Input('Data') Datos:any;

  constructor(
    private Dialog: MatDialog
  ){}

  OpenAddUnidad(){
    this.Dialog.open(DialogAddUnidadComponent,{
      width:"50%"
    })
  }

}
