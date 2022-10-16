import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';

@Injectable({ providedIn: 'root' })
export class ItemService {

  private itemsUrl = 'https://63297407d2c97d8c52679f93.mockapi.io/api/item';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET items from the server */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  getItemNo404<Data>(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/?id=${id}`;
    return this.http.get<Item[]>(url)
      .pipe(
        map(items => items[0]), // returns a {0|1} element array
        catchError(this.handleError<Item>(`getItem id=${id}`))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Item[]>('searchItems', []))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }

  deleteItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<Item>(url, this.httpOptions).pipe(
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  updateItem(item: Item): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;

    return this.http.put(url, item, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }

}
