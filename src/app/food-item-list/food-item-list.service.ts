import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemListService {

  constructor(private http: HttpClient) { }

  getFoodItemList(): Observable<any> {
   return this.http.get('assets/food-item-list.json').pipe(res => {
      return of(res);
    })

  }
}
