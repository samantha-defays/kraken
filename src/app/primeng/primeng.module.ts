import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputSwitchModule,
    CardModule,
  ],
  exports: [
    InputSwitchModule,
    CardModule,
  ]
})
export class PrimengModule { }
