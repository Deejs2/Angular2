import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalApiHandler } from '../model/global-api-handler.model';
import { PersonalDetail } from '../model/personal-detail-form.model';
@Injectable({
  providedIn: 'root'
})

export class HttpHandlerService {

  constructor(private http: HttpClient) { }

  private baseUrl = `http://localhost:8080/api/v1/personalDetail`
  private loginUrl = `http://localhost:8080/api/v1/login`

  createPersonalDetail(data: any):Observable<any>{
    return this.http.post<any>(this.baseUrl, data);
  }

  getPersonalDetail():Observable<GlobalApiHandler<PersonalDetail>>{
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.get<GlobalApiHandler<PersonalDetail>>(`${this.baseUrl}/fetch`, { headers: headers });
  }

  getPersonalDetailById(id: number):Observable<GlobalApiHandler<PersonalDetail>>{
    return this.http.get<GlobalApiHandler<PersonalDetail>>(`${this.baseUrl}/fetch`);
  }

  updatePersonalDetail(id: number, data: any):Observable<any>{
    return this.http.put<any>(this.baseUrl+id, data);
  }

  deletePersonalDetail(id: number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+id);
  }

  postUserLogin(data: any):Observable<any>{
    return this.http.post<any>(this.loginUrl, data);
  }

}
