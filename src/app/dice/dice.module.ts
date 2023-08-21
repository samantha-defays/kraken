import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceRoutingModule } from './dice-routing.module';
import { ClearDiceComponent } from './clear-dice/clear-dice.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ClearDiceComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DiceRoutingModule,
    SharedModule,
  ]
})
export class DiceModule { }
