import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearDiceComponent } from './clear-dice/clear-dice.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: "",
    component: ClearDiceComponent
  },
  {
    path: ":id",
    // TODO: ajouter un regex pour spécifier que chiffre seulement
    component: DetailComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiceRoutingModule { }
