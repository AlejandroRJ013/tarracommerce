import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEventos } from '../interfaces/eventos';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private _dataUrl: string =
    'https://tarracommerce-jazsdevs-default-rtdb.europe-west1.firebasedatabase.app/eventos.json';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<IEventos[]> {
    return this.http.get<IEventos[]>(this._dataUrl).pipe(
      catchError((error) => {
        console.error('Error fetching eventos', error);
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    );
  }
}
