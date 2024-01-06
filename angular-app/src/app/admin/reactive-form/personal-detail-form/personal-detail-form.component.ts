import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../../../services/http-handler.service';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail-form',
  templateUrl: './personal-detail-form.component.html',
  styleUrl: './personal-detail-form.component.scss'

})
export class PersonalDetailFormComponent implements OnInit{

  ngOnInit(): void {
    
  }


}


