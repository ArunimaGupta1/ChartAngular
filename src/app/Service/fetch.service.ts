import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  url:string ="../assets/data.json"
  constructor(private http: HttpClient) {

   }

   getData(): Observable<any[]> {
      return this.http.get<any[]>(this.url)
    }
   


}
