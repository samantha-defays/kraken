import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ClearDiceComponent } from './dice/clear-dice/clear-dice.component';

const routes: Routes = [
  {
    path: "",
    title: "Kraken Play",
    component: HomeComponent
  },
  {
    path: "dice",
    loadChildren: () => import("./dice/dice.module").then(m => m.DiceModule)
  },
  {
    path: "accessories",
    loadChildren: () => import("./accessories/accessories.module").then(m => m.AccessoriesModule)
  },
  {
    path: "sales",
    loadChildren: () => import("./sales/sales.module").then(m => m.SalesModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
