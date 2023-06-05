import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddDepartamentoComponent } from '../dialog-add-departamento/dialog-add-departamento.component';

@Component({
  selector: 'app-departamentos-tabla',
  templateUrl: './departamentos-tabla.component.html',
  styleUrls: ['./departamentos-tabla.component.css']
})
export class DepartamentosTablaComponent {
  @Input('Data') Datos:any;
  constructor(
    private Dialog:MatDialog
  ){}
  OpenAddDepart(){
    this.Dialog.open(DialogAddDepartamentoComponent,{
      width:"50%"
    })
  }
}
