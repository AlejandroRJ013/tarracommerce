import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INegocios } from '../interfaces/negocios';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NegociosService {
  private _dataUrl: string =
    'https://tarracommerce-jazsdevs-default-rtdb.europe-west1.firebasedatabase.app/negocios.json';

  constructor(private http: HttpClient) {}

  getNegocios(): Observable<INegocios[]> {
    return this.http.get<INegocios[]>(this._dataUrl).pipe(
      catchError((error) => {
        console.error('Error fetching negocios', error);
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    );
  }

  getNegocioById(id: string): Observable<INegocios | undefined> {
    return this.getNegocios().pipe(
      map((negocios: INegocios[]) =>
        negocios.find((negocio) => negocio._id === id)
      )
    );
  }
}
