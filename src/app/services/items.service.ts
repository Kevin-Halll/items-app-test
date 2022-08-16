import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './interfaces/items.interface';
import { APIResponse } from './interfaces/restAPI.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiURL = "http://localhost:3000/items_list"

  constructor(private http: HttpClient) { }

  getAllItems():Observable<APIResponse<Item[]>>{
    return this.http.get<APIResponse<Item[]>>(this.apiURL)
  }
  createItem(data:Item): Observable<APIResponse<Item>>{
    return this.http.post<APIResponse<Item>>(this.apiURL, data);
  }
}
