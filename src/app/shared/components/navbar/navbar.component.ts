import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public themeDark: boolean = true;

  constructor(
    private router: Router
  ) {}

  public goTo(routeName: string): void {
    this.router.navigate([routeName]);
  }

}
