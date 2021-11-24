import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiloginService } from '../services/apilogin.service';


@Component({
  selector: 'app-actdatos',
  templateUrl: './actdatos.page.html',
  styleUrls: ['./actdatos.page.scss'],
})
export class ActdatosPage implements OnInit {
  id: any;
  mensaje: String ="";  
  formact: FormGroup;
  constructor(public alertController: AlertController,private router: Router, public toastController: ToastController, private servicio: ApiloginService, private formBuilder: FormBuilder) { 
    this.formact= this.formBuilder.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]), 
    pass: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });
 }
  ngOnInit() {
  }


  putUser()
  {
    let datos = this.formact.value;
    let id1 = this.id=sessionStorage.getItem('id');
    
    
    this.servicio.updateUser(id1,datos).subscribe((data)=>{

      console.log(data);
      this.mensaje=data.message;
      

    });

  }


  eliminarUser()
  {
    let id1 = this.id=sessionStorage.getItem('id');
      this.servicio.eliminarUser(id1).subscribe((data)=>{

        console.log(id1);

      console.log(data);
      this.mensaje=data.message;
              
        
      });
  }

  volver()
  {
    this.router.navigate(['/home']) ;
  }

  showConfirm() {
    this.alertController.create({
      header: 'Alerta',
  
      message: 'Estas segur@ que deseas eliminar tu cuenta?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            let id1 = this.id=sessionStorage.getItem('id');
            this.servicio.eliminarUser(id1).subscribe((data)=>{

              console.log(data);
              this.mensaje=data.message;
              this.router.navigate(['/login']) ;
        
            });
          }
        },
        {
          text: 'No',
          handler: () => {
            this.router.navigate(['/actdatos']) ;
          }
        },
        
      ]
    }).then(res => {
      res.present();
    });
  }

}
