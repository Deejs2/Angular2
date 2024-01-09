import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router) { }

  private authenticated = false;

  login(username: string, password:string){
    if(username=='user'&&password=='user' || username=='admin' && password=='admin'){
      this.authenticated=true
    }else{
      this.authenticated=false
    }
  }
  logout(): void{
    localStorage.removeItem('token');
    this.authenticated = false
    this.router.navigate(['/login'])
  }

  isLoggedIn(){
    return this.authenticated;
  }

  
}
