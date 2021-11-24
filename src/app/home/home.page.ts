import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string="";
  texto: string="";
  constructor(private router: Router) {
  this.texto="esta app registrara la asistencia de los estudiantes del DuocUC";
  this.nombreUsuario=sessionStorage.getItem('nombreUsuario');

}

ingresaractu()
{
  this.router.navigate(['/actdatos']) ;
}

volver()
  {
    this.router.navigate(['/login']) ;
  }
}
