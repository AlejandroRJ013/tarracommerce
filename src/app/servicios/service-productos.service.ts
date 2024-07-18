import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductos } from '../interfaces/productos';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _dataUrl: string =
    'https://tarracommerce-jazsdevs-default-rtdb.europe-west1.firebasedatabase.app/productos.json';
  private carritoCookieName = 'carrito';
  categoriasMap: { [key: string]: string } = {
    cat01: 'Alimentos y Bebida',
    cat02: 'Juguetes y Juegos',
    cat03: 'Salud y Belleza',
    cat04: 'Hogar y Decoración',
    cat05: 'Mascotas',
    cat06: 'Moda y Accesorios',
    cat07: 'Libros y Papelería',
    cat08: 'Tecnología y Electrónica',
    cat09: 'Deportes y Aire Libre',
    cat10: 'Artesanía y Manualidades',
  };

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getProductos(): Observable<IProductos[]> {
    return this.http.get<IProductos[]>(this._dataUrl).pipe(
      catchError((error) => {
        console.error('Error fetching productos', error);
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    );
  }

  getProductoById(id: string): Observable<IProductos | undefined> {
    return this.getProductos().pipe(
      map((productos: IProductos[]) =>
        productos.find((producto) => producto._id === id)
      )
    );
  }

  agregarAlCarrito(producto: IProductos): void {
    const carrito = this.getCarrito();
    carrito.push(producto);
    this.cookieService.set(this.carritoCookieName, JSON.stringify(carrito));
    console.log('Producto añadido al carrito', carrito);
  }

  getCarrito(): IProductos[] {
    const carrito = this.cookieService.get(this.carritoCookieName);
    return carrito ? JSON.parse(carrito) : [];
  }

  getCategoriaNombre(catId: string): string {
    return this.categoriasMap[catId] || 'Categoría Desconocida'; // Valor por defecto
    console.log(
      'Nombre categorías:',
      this.categoriasMap[catId] || 'Categoría Desconocida'
    );
  }
}
