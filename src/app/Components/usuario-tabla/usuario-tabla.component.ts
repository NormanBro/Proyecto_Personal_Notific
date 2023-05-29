import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogAddUsersComponent } from '../dialog-add-users/dialog-add-users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-tabla',
  templateUrl: './usuario-tabla.component.html',
  styleUrls: ['./usuario-tabla.component.css']
})
export class UsuarioTablaComponent {
  @Input('Data') srv:any;  

  constructor(
    private Dialog:MatDialog,
    private router:Router
    
    ){}
  OpenAddUsers(){
    this.Dialog.open(DialogAddUsersComponent,{
      width:"40%"
    })
    
  }
}
