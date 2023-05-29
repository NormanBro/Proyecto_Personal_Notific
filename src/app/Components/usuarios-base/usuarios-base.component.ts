import { Component,OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Service/usuarios.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuarios-base',
  templateUrl: './usuarios-base.component.html',
  styleUrls: ['./usuarios-base.component.css']
})
export class UsuariosBaseComponent implements OnInit {
  Usuarios:any={};
  constructor(
    private srv:UsuariosService,
    private router:Router,
    private local:Location
  ){
    this.srv.GetAllUsuarios().subscribe(usr=>{
      this.Usuarios=usr;
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
