import { Component,Input,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder }from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input('Usr') Data:any;
  public FormLogin!:FormGroup;

  constructor(
    private Formbuilder:FormBuilder,
    private router:Router
    ){}
  
  ngOnInit(): void {
      this.FormLogin= this.Formbuilder.group(
        {
          NCuenta:[''],
          Password:['']
        }
      )
  }
  
  ClickLogin(){
    this.Data.forEach((element:any) => {
      
      if(
        (this.FormLogin.value.NCuenta==element.NoCuenta)
        &&
        (this.FormLogin.value.Password==element.Password)
      ){
        this.router.navigate(['/Home'])
        localStorage.setItem('Session',element.Nombre)
      }


    });
    console.log(this.FormLogin.value.NCuenta)
  }
}
