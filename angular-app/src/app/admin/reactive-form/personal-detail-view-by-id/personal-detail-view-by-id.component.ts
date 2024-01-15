import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../../../services/http-handler.service';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeFormatterPipe } from '../../../pipes/age-formatter.pipe';
import { FullnamePipe } from '../../../pipes/fullname.pipe';

@Component({
  selector: 'app-personal-detail-view-by-id',
  templateUrl: './personal-detail-view-by-id.component.html',
  styleUrl: './personal-detail-view-by-id.component.scss'
})
export class PersonalDetailViewByIdComponent implements OnInit{

  id : number = 0
  formData: any

  constructor(private httpService: HttpHandlerService, private router: ActivatedRoute, private fullname: FullnamePipe, private date: DatePipe, private ageFormatter: AgeFormatterPipe,
    private location: Location){ 
    this.router.queryParams.subscribe(
      (response:any) => {
        this.id = response.id;
      }
    )
  }

  ngOnInit(): void {
    this.httpService.getPersonalDetailById(this.id).subscribe(
      (response:any) => {
        this.formData = response.data
        console.log(this.formData)
      },
      (error: any) => {console.log("Error while Fetch by Id!")}
    )
  }


  onClickBack(){
    this.location.back()
  }



}
