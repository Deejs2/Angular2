import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail-view',
  templateUrl: './personal-detail-view.component.html',
  styleUrl: './personal-detail-view.component.scss'
})
export class PersonalDetailViewComponent {

  constructor(private router: Router){}
  
  onClickAddPersonalDetail(){
    this.router.navigate(['admin/personal-detail/add'])
  }


}
