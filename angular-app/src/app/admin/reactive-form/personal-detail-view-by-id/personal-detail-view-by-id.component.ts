import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../../../services/http-handler.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeFormatterPipe } from '../../../pipes/age-formatter.pipe';
import { NepaliNumberFormatterPipe } from '../../../pipes/nepali-number-formatter.pipe';

@Component({
  selector: 'app-personal-detail-view-by-id',
  templateUrl: './personal-detail-view-by-id.component.html',
  styleUrl: './personal-detail-view-by-id.component.scss'
})
export class PersonalDetailViewByIdComponent implements OnInit{

  formData : any;
  formDataStatus : boolean = false
  id: number = 0
  idStatus: boolean = false

  constructor(private httpService: HttpHandlerService, private date:DatePipe, private router: Router,
     private ageFormatter: AgeFormatterPipe, private nepaliNumber: NepaliNumberFormatterPipe,
     private aRouter: ActivatedRoute
     ){ }

  ngOnInit(): void {
    
    this.getDetails();

    

    
  }

  getDetails(){
    this.httpService.getPersonalDetail().subscribe(
      (result: any) => {
        this.formData = result;
        this.formDataStatus = true;
      },
      (error: any) => {
        if(this.formDataStatus==false){
          console.log("No Records Found!");
        }
      }
    );
  }

  onClickAddPersonalDetail(){
    this.router.navigate(['personal-detail/add'])
  }
  
  onClickShowPersonalDetail(id: any){
    this.router.navigate(['personal-detail/view'],{queryParams: {id:id}})
  }

  onClickEditPersonalDetail(id: any){
    this.router.navigate(['personal-detail/edit'], {queryParams: {id:id}})
  }

  onClickDelete(id: number){

    if(confirm("Do You Really Want To Delete ID: "+id+" ?")){
      this.httpService.deletePersonalDetail(id).subscribe(
        (response:any) => {
          console.log(response.data)
          this.getDetails();
        },
        (error:any) => {
          console.log("Error While Deleting")
          this.getDetails();
        }
      )
    }

  }

}
