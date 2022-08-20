import { Component } from '@angular/core';

@Component({
  selector: 'dragon-ball-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dragonball';
  links = [{ path: '/saiyans', icon: 'view_list', title: 'Saiyans' }];
}
