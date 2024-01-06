import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) { }

  private baseUrl = `http://localhost:8080/personalDetail`

  createPersonalDetail(data: any):Observable<any>{
    return this.http.post<any>(this.baseUrl, data);
  }

  getPersonalDetail():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  updatePersonalDetail(id: number, data: any):Observable<any>{
    return this.http.put<any>(this.baseUrl+id, data);
  }

  deletePersonalDetail(id: number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+id)
  }

}
