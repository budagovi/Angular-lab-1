import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    {id: '21100264', name: 'Luka', email: '21100264@ibsu.edu.ge'},
    {id: '21100143', name: 'Achiko', email: '21100143@ibsu.edu.ge'},
    {id: '22100342', name: 'Guka', email: '22100342@ibsu.edu.ge'},
    {id: '21104300', name: 'Ketevan', email: '21104300@ibsu.edu.ge'},
    {id: '21100267', name: 'Giorgi', email: '21100267@ibsu.edu.ge'},
  ];
}
