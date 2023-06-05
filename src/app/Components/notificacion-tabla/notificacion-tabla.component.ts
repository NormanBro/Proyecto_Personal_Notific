import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddNotificacionComponent } from '../dialog-add-notificacion/dialog-add-notificacion.component';

@Component({
  selector: 'app-notificacion-tabla',
  templateUrl: './notificacion-tabla.component.html',
  styleUrls: ['./notificacion-tabla.component.css']
})
export class NotificacionTablaComponent {

  @Input('Data') srv:any 

  constructor(
    private Dialog:MatDialog
  ){}

  OpenAddNotificacion(){
    this.Dialog.open(DialogAddNotificacionComponent,{
      width:"50%"
    })
  }
}
