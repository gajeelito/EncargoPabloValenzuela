import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { ActdatosPageRoutingModule } from './actdatos-routing.module';

import { ActdatosPage } from './actdatos.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ActdatosPageRoutingModule,
    
  ],
  declarations: [ActdatosPage]
})
export class ActdatosPageModule {}
