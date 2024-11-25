import { Injectable } from '@angular/core';  

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(firstName: string, lastName: string, email: string, password: string) {
    throw new Error('Method not implemented.');
  }

}