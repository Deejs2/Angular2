import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHandlerService } from '../../../services/http-handler.service';
import { DatePipe } from '@angular/common';
import { AgeFormatterPipe } from '../../../pipes/age-formatter.pipe';
import { NepaliNumberFormatterPipe } from '../../../pipes/nepali-number-formatter.pipe';
import { ToastrNotificationService } from '../../../services/toastr-notification.service';

@Component({
  selector: 'app-personal-detail-view',
  templateUrl: './personal-detail-view.component.html',
  styleUrl: './personal-detail-view.component.scss'
})
export class PersonalDetailViewComponent {

  formData : any;
  formDataStatus : boolean = false
  id: number = 0
  idStatus: boolean = false

  constructor(private httpService: HttpHandlerService, private date:DatePipe, private router: Router,
     private ageFormatter: AgeFormatterPipe, private nepaliNumber: NepaliNumberFormatterPipe,
     private aRouter: ActivatedRoute,
     private toastr: ToastrNotificationService
     ){ }

  ngOnInit(): void {
    
    this.getDetails();

    

    
  }

  onClickAddPersonalDetail(){
    this.router.navigate(['admin/personal-detail/add'])
  }

  getDetails(){
    this.httpService.getPersonalDetail().subscribe(
      (result: any) => {
        this.formData = result.data;
        console.log(result)
        this.formDataStatus = true;
      },
      (error: any) => {
        if(this.formDataStatus==false){
          console.log("No Records Found!");
        }
      }
    );
  }
  
  onClickShowPersonalDetail(id: any){
    this.router.navigate(['admin/personal-detail/viewById'],{queryParams: {id:id}})
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
          this.toastr.showCancel("You have Deleted ID: "+id)
        },
        (error:any) => {
          console.log("Error While Deleting")
          this.getDetails();
        }
      )
    }

  }


}

