import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogAddCarreraComponent } from '../dialog-add-carrera/dialog-add-carrera.component';


@Component({
  selector: 'app-carrera-tabla',
  templateUrl: './carrera-tabla.component.html',
  styleUrls: ['./carrera-tabla.component.css']
})
export class CarreraTablaComponent {
  @Input('Data') Datos:any;

  constructor(private Dialog:MatDialog){}

  OpenAddCarrera(){
    this.Dialog.open(DialogAddCarreraComponent,{
      width:"50%"
    })
  }

}

