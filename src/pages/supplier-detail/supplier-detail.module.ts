import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierDetailPage } from './supplier-detail';
import { SharedModule } from '../../app/share.module';

@NgModule({
  declarations: [
    SupplierDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplierDetailPage),
    SharedModule,
  ],
})
export class SupplierDetailPageModule { }
