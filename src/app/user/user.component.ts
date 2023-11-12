import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() users:User[] = [];

  validateName(name: string) {
    name = name.toLowerCase();
    return !(name.includes('z') || name.includes('h'));
  }
}
