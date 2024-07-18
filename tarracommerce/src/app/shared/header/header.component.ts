import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociosService } from '../../servicios/service-negios.service';
import { ProductosService } from '../../servicios/service-productos.service';
import { INegocios } from '../../interfaces/negocios';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  negocios: INegocios[] = [];
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
  categorias: string[] = [];

  constructor(
    private negociosService: NegociosService,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.loadNegocios();
    this.loadCategorias();
  }

  loadNegocios(): void {
    this.negociosService.getNegocios().subscribe((data) => {
      this.negocios = data;
    });
  }

  loadCategorias(): void {
    this.productosService.getProductos().subscribe((data) => {
      console.log('Productos:', data); // Verificar datos de productos
      this.categorias = [
        ...new Set(data.map((producto) => producto.categoria)),
      ];
      console.log('Categorías únicas:', this.categorias); // Verificar categorías únicas
    });
  }

  getCategoriaNombre(catId: string): string {
    return this.categoriasMap[catId] || 'Categoría Desconocida'; // Valor por defecto
    console.log(
      'Nombre categorías:',
      this.categoriasMap[catId] || 'Categoría Desconocida'
    );
  }
}
