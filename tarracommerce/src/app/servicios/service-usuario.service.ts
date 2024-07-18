import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService implements OnInit {
  private _dataUrl: string =
    'https://tarracommerce-jazsdevs-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getUsuarios(): Observable<IUsuarios[]> {
    return this.http.get<IUsuarios[]>(this._dataUrl);
  }
}
