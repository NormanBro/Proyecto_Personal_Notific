import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

import { NotificacionService } from 'src/app/Service/notificacion.service';

@Component({
  selector: 'app-dialog-add-notificacion',
  templateUrl: './dialog-add-notificacion.component.html',
  styleUrls: ['./dialog-add-notificacion.component.css']
})
export class DialogAddNotificacionComponent implements OnInit {
  
  FormAddNotificacion!:FormGroup;
  
  constructor(
    private Formbuilders:FormBuilder,
    private Notificacion:NotificacionService
  ){}

  OnSumbitAddNotificacion(){
    this.Notificacion.PostNotificacion(this.FormAddNotificacion.value).subscribe(item=>{
      console.log(item)
    })
  }

  ngOnInit(): void {
      this.FormAddNotificacion=this.Formbuilders.group({
        Titulo:[''],
        Descripcion:['']
      })
  }

}
