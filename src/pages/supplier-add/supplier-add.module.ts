import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierAddPage } from './supplier-add';
import { SharedModule } from '../../app/share.module';

@NgModule({
  declarations: [
    SupplierAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplierAddPage),
    SharedModule,
  ],
})
export class SupplierAddPageModule { }
