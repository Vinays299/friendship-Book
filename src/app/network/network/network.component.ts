import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  photoUrl: string;
  isFriend: boolean;
  requestSent: boolean;
}

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent implements OnInit {

  users: User[] = [
    { name: 'Amar Pawar', email: 'amar123@gmail.com', photoUrl: '.jpg', isFriend: false, requestSent: false },
    { name: 'Prasad Jadhav', email: 'prasad11@gmail.com', photoUrl: '.jpg', isFriend: false, requestSent: false },
    { name: 'Shubham Patil', email: 'subhanm22@gmail.com', photoUrl: '.jpg', isFriend: false, requestSent: false },
    
  ];

  constructor() {}

  ngOnInit(): void {}

  sendFriendRequest(user: User) {
    user.requestSent = true;
    console.log(`Friend request sent to ${user.name}`);
    
  }


}
