import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrNotificationService } from '../../services/toastr-notification.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, private toastr: ToastrNotificationService, private authService: AuthenticationService){}
  onClickLogout(){
      // this.router.navigate(['/login'])
      this.authService.logout();
      this.toastr.showSuccess("You have Successfully Logged Out!")
  }
}
