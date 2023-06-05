import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBaseComponent } from './Components/login-base/login-base.component';
import { BaseInicioComponent } from './Components/base-inicio/base-inicio.component';
import { UsuariosBaseComponent } from './Components/usuarios-base/usuarios-base.component';
import { UniacaBaseComponent } from './Components/uniaca-base/uniaca-base.component';
import { CarreraBaseComponent } from './Components/carrera-base/carrera-base.component';
import { DepartamentosBaseComponent } from './Components/departamentos-base/departamentos-base.component';
import { NotificacionBaseComponent } from './Components/notificacion-base/notificacion-base.component';

const routes: Routes = [
  {path:"",component:LoginBaseComponent},
  {path:"Home",component:BaseInicioComponent},
  {path:"Usuarios",component:UsuariosBaseComponent},
  {path:"UnidadAcademica",component:UniacaBaseComponent},
  {path:"Carrera",component:CarreraBaseComponent},
  {path:"Departamento",component:DepartamentosBaseComponent},
  {path:"Notificacion",component:NotificacionBaseComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
