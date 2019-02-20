import { Injectable } from '@angular/core';
import { User } from '../modal/user';
import { Observable } from 'rxjs';
import { Uri } from './uri';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  //login
 public login(userData: User):Observable<any> {
  console.log('Login API called');
  return this.http.post(Uri.pLogin,userData,httpOptions);
} // end of login


  constructor(private http: HttpClient) { }
}
