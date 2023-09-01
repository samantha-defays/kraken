import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
