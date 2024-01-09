import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../../services/http-handler.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
// import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  formData: FormGroup = new FormGroup<any>({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpService: HttpHandlerService,
    private authService: AuthenticationService
    ){}

    ngOnInit(): void {
      this.formData = this.fb.group({
        username: '',
        password: ''
      })
    }

  onClickClose(){
    this.router.navigate(['/home'])
  }

  onClickSubmit(){
    console.log(this.formData.value)
    // this.router.navigate(['/admin'])
    this.httpService.postUserLogin(this.formData.value).subscribe(
      (response: any) => {
        // console.log(response.data.token)
        localStorage.setItem('token',response.data.token)
        this.authService.login(this.formData.get('username')?.value, this.formData.get('password')?.value);
        this.router.navigate(['/admin'])
      },
      (error: any) => {
        console.log("Error While Submitting Login Form")
      }
    )
  }

}
