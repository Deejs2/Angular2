import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../../../services/http-handler.service';
import { SharedService } from '../../../services/shared.service';
import { ToastrNotificationService } from '../../../services/toastr-notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail-add',
  templateUrl: './personal-detail-add.component.html',
  styleUrl: './personal-detail-add.component.scss'
})
export class PersonalDetailAddComponent implements OnInit {

  formSubmitStatus : boolean = false;

  maxDate : any 

  personalDetailFormGroup: FormGroup = new FormGroup<any>({});

  constructor(
    private fb: FormBuilder,
    private date : DatePipe, 
    private sharedService: SharedService, 
    private httpService: HttpHandlerService,
    private location: Location,
    private toastr: ToastrNotificationService,
    private router: Router
    ) {}

  ngOnInit(): void {

    this.personalDetailFormGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.max(10000000000)]],
      familyDetailArray: this.fb.array([])
    });

    this.addFamilyDetail();

     

    this.maxDate = this.date.transform(new Date(),'yyyy-MM-dd');
  
    
  }

  // getter for familyDetailArray
  get familyDetailArray() {
    return (this.personalDetailFormGroup.get('familyDetailArray') as FormArray);
  }

  addFamilyDetail() {
    this.familyDetailArray.push(this.fb.group({
      familyFirstname:['', [Validators.required]],
      familyLastname:['', [Validators.required]],
      familyDateOfBirth:['', [Validators.required]],
      familyAge:['', [Validators.required]],
      familyEmail:['', [Validators.required, Validators.email]],
      familyPhone:['', [Validators.required, Validators.max(10000000000)]]
    }));
    // console.log(this.personalDetailFormGroup.value);
  }

  removeFormArrayItem(index: number): void {
    if(index>0){
      this.familyDetailArray.removeAt(index);
    }
  }

  onClickCancel(){
    this.location.back();
  }


  onSubmitForm() {

    this.formSubmitStatus = true;


    console.log(this.personalDetailFormGroup.value);

    if(this.personalDetailFormGroup.valid){
      this.httpService.createPersonalDetail(this.personalDetailFormGroup.value).subscribe(
        (response: any) => {
          // Handle the API response
          // console.log('API Response:', response);
          console.log("Form Value Submitted by API");
          this.toastr.showSuccess('Form Submitted Successfully!');
          this.location.back();
        },
        (error: any) => {
          // Handle API error
          // console.error('API Error:', error);
          console.log("Error while submitting");
        }
      );
      
    }else{
      this.toastr.showCancel("Please Enter a Valid Details!")
    }

    

  }

  calculateAge(dob:any){
    let age = this.sharedService.ageCalculation(dob);
    this.personalDetailFormGroup.get("age")?.setValue(age);
  }



  calculateFamilyAge(index : number): void {
    const dateOfBirthControl = this.familyDetailArray.at(index).get('familyDateOfBirth')?.value;
    let age = this.sharedService.ageCalculation(dateOfBirthControl);
    this.familyDetailArray.at(index).get('familyAge')?.setValue(age);
  }


  

}
