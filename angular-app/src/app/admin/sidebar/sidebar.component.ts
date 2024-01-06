import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router){}

  onClickDashboard(){
    this.router.navigate(['admin/dashboard'])
  }

  onClickViewDetail(){
    this.router.navigate(['admin/personal-detail'])
  }
}
