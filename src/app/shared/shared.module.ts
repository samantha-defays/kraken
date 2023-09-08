import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
