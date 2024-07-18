import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IProductos } from '../../interfaces/productos';
import { ProductosService } from '../../servicios/service-productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-cat',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos-cat.component.html',
  styleUrls: ['./productos-cat.component.css'],
})
export class ProductosCatComponent implements OnInit, AfterViewInit {
  cantDinero: number = 0;
  categoria: string | null = '';
  nombreCat: string | null = '';
  public productosList: IProductos[] = [];

  constructor(
    private productoService: ProductosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoria = params.get('categoria');
      this.loadProductos();
    });
    this.route.paramMap.subscribe((params) => {
      this.nombreCat = params.get('nombre');
      this.loadProductos();
    });
  }

  loadProductos(): void {
    this.productoService
      .getProductos()
      .subscribe(
        (data) =>
          (this.productosList = data.filter(
            (product) => product.categoria === this.categoria
          ))
      );
  }

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    const input = document.getElementById(
      'filtroDinero'
    ) as HTMLInputElement | null;
    if (input) {
      input.addEventListener('input', () => this.mostrarDinero(input));
    }
  }

  mostrarDinero(input: HTMLInputElement) {
    const dinero = input.value;
    this.cantDinero = parseFloat(dinero);
    const mostrarValor = document.getElementById('mostrarValor');
    if (mostrarValor) {
      mostrarValor.textContent = dinero;
    }
  }
}
