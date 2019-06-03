import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  
  constructor() {
    this.user = new User();
    this.user.name = 'Brian';
    this.user.title = 'software engineer'
    this.user.address = '1000 kenya avenue'
    this.user.phone = [
      '1323242',
      '243435353'
    ];
  }
}
