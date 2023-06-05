import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBaseComponent } from './Components/login-base/login-base.component';
import { LoginComponent } from './Components/login/login.component';
import { BaseInicioComponent } from './Components/base-inicio/base-inicio.component';
import { BarHomeComponent } from './Components/bar-home/bar-home.component';
import { UsuariosBaseComponent } from './Components/usuarios-base/usuarios-base.component';
import { UsuarioTablaComponent } from './Components/usuario-tabla/usuario-tabla.component';
import { UniacaBaseComponent } from './Components/uniaca-base/uniaca-base.component';
import { UniacaTablaComponent } from './Components/uniaca-tabla/uniaca-tabla.component';
import { CarreraBaseComponent } from './Components/carrera-base/carrera-base.component';
import { CarreraTablaComponent } from './Components/carrera-tabla/carrera-tabla.component';
import { DepartamentosBaseComponent } from './Components/departamentos-base/departamentos-base.component';
import { DepartamentosTablaComponent } from './Components/departamentos-tabla/departamentos-tabla.component';

import { HttpClientModule } from '@angular/common/http';
import { DialogAddUsersComponent } from './Components/dialog-add-users/dialog-add-users.component';
import { DialogAddUnidadComponent } from './Components/dialog-add-unidad/dialog-add-unidad.component';
import { DialogAddCarreraComponent } from './Components/dialog-add-carrera/dialog-add-carrera.component';
import { DialogAddDepartamentoComponent } from './Components/dialog-add-departamento/dialog-add-departamento.component';

import { MatDialogModule } from '@angular/material/dialog';
import { NotificacionBaseComponent } from './Components/notificacion-base/notificacion-base.component';
import { NotificacionTablaComponent } from './Components/notificacion-tabla/notificacion-tabla.component';
import { DialogAddNotificacionComponent } from './Components/dialog-add-notificacion/dialog-add-notificacion.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginBaseComponent,
    LoginComponent,
    BaseInicioComponent,
    BarHomeComponent,
    UsuariosBaseComponent,
    UsuarioTablaComponent,
    UniacaBaseComponent,
    UniacaTablaComponent,
    CarreraBaseComponent,
    CarreraTablaComponent,
    DepartamentosBaseComponent,
    DepartamentosTablaComponent,
    DialogAddUsersComponent,
    DialogAddUnidadComponent,
    DialogAddCarreraComponent,
    DialogAddDepartamentoComponent,
    NotificacionBaseComponent,
    NotificacionTablaComponent,
    DialogAddNotificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
