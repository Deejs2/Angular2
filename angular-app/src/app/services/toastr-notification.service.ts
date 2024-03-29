import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string){
    this.toastr.success(message);
  }

  showCancel(message: string){
    this.toastr.error(message)
  }
}
