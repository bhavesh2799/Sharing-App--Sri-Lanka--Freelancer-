import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { FileUploadModule } from 'ng2-file-upload';
import { MultiFileUpload2Component } from '../components/multi-file-upload2/multi-file-upload2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MultiFileUpload2Component]
})
export class HomePageModule {}
