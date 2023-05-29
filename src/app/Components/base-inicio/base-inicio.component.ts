import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-base-inicio',
  templateUrl: './base-inicio.component.html',
  styleUrls: ['./base-inicio.component.css']
})
export class BaseInicioComponent implements OnInit {

  constructor(private router:Router){}
  clickExit(){
    localStorage.removeItem('Session')
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
     if(!localStorage.getItem('Session')){
        this.router.navigate(['/'])
     }
  }

}
