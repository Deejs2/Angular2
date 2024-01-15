import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { ToastrNotificationService } from '../services/toastr-notification.service';
import { response } from 'express';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  const toastr = inject(ToastrNotificationService)

  if(typeof localStorage !== 'undefined' && localStorage.getItem('token')){
     req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
     })
  }
  // return next(req).pipe(tap(event => {
  //   if (event.type === HttpEventType.ResponseHeader) {
  //     console.log(req.url, 'returned a response with status', event.status);
  //     console.log(event.status)
  //     if(event.status==403){
  //       console.log('Forbidden: Access is denied.'); 
  //     }
  //   }
  // }));
  return next(req).pipe(
    tap(
      (event => {
        if(event.type == HttpEventType.Response){
          console.log(event.body)
        }
      })
      ),
    catchError((error)=>{
      if(error.status==403){
        console.log('403 Forbidden: Access is denied.');
        toastr.showCancel("403 Forbidden: Access is denied.")
      }
      console.error(error.message);
      return throwError(() => error);
    })
  );
};
