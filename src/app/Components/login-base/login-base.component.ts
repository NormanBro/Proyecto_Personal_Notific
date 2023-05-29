import { Component,OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Service/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.css']
})
export class LoginBaseComponent implements OnInit {
  Usuarios:any={};
  ngOnInit(): void {
    if(localStorage.getItem('Session')){
      this.router.navigate(['Home'])
    }
  }
  constructor(
    private srv:UsuariosService,
    private router:Router
    ){
    this.srv.GetAllUsuarios().subscribe(usr=>{
      this.Usuarios=usr;
    })
  }
}
