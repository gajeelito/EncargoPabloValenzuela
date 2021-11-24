import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiloginService } from '../services/apilogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;
  mensaje: String ="";


  constructor(private router: Router, private servicio: ApiloginService) {
    

    this.formulariologin= new FormGroup({
      correoUser: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
      contraUser: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
      

    })
   }

  

  ngOnInit() {
  }
  validarUsuario()

  {
   let correo: string=this.formulariologin.get('correoUser')?.value;
   let contra: string=this.formulariologin.get('contraUser')?.value;
  
    this.servicio.getUser( correo, contra).subscribe((data)=>{

      console.log(data);
      if(data.message)
      {
        this.mensaje=data.message;
      }
      else{
        sessionStorage.setItem('nombreUsuario', data.loginu.nombre);
        sessionStorage.setItem('id', data.loginu.id);
        this.router.navigate(['/home']) ;
        
      }
    })
    
    //console.log("validar usuario")

    //console.log(this.formulariologin.value['correoUser']);

    
    //this.router.navigate(['/home']) ;
  }
}
