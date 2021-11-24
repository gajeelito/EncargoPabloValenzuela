import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiloginService } from '../services/apilogin.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

   mensaje: String ="";  
    formRegistro: FormGroup;
  constructor(private router: Router, public toastController: ToastController, private servicio: ApiloginService, private formBuilder: FormBuilder) {
    this.formRegistro= this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]), 
      pass: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    });
   }
  

  ngOnInit() {
  }


 // guardarUsuario()
  //{
    //guardar el usuario de forma local
    //validar el form y redireccionar

   // this.presentToast();
    
    //this.router.navigate(['login']);

  //}

  postDatos() {
     let datos = this.formRegistro.value
    console.log(datos)
    this.servicio.Post(datos).subscribe((data)=>{

      console.log(data);
      this.mensaje=data.message;
      this.router.navigate(['/login'])

    });
  }
  
  volver()
  {
    this.router.navigate(['/login']) ;
  }
 // async presentToast() {
   //const toast = await this.toastController.create({
     // message: 'Registro guardado!! XD.',
      //duration: 2000
    //});
    //toast.present();
 // }

}
