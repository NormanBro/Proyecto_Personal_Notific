import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotificacionService } from 'src/app/Service/notificacion.service';

@Component({
  selector: 'app-notificacion-base',
  templateUrl: './notificacion-base.component.html',
  styleUrls: ['./notificacion-base.component.css']
})
export class NotificacionBaseComponent implements OnInit {
  Notificaciones:any={}

  constructor(
    private  svr:NotificacionService,
    private router:Router,
    private local:Location
  ){
    this.svr.GetAllNotificacion().subscribe(item=>{
      this.Notificaciones=item
    })
  }

  OnBack(){
    this.local.back();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('Session')){
      this.router.navigate(['/'])
    }
  }

}
