import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class ApiloginService {
  

  constructor(private http: HttpClient) { }

  getUser(email: string, contra: string): Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/api/login/'+email+'/'+contra)
  }

  Post(   datos: any):Observable<any>
  {
    const url = 'http://127.0.0.1:8000/api/login/';



  
    return this.http.post(url, datos);
    
  }

  updateUser(id: any, datos: any): Observable<any>
  {
    const url = 'http://127.0.0.1:8000/api/login/';
    return this.http.put(url+id, datos  );

  }

  eliminarUser(id: any): Observable<any>
  {
    const url = 'http://127.0.0.1:8000/api/login/';

    return this.http.delete(url+id);
  }


}
