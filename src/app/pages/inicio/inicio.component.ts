import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IProductos } from '../../interfaces/productos';
import { ProductosService } from '../../servicios/service-productos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements AfterViewInit {
  slideIndex: number = 0;
  cantDinero: number = 0;
  productosMostrar: string[] = [
    'prod48',
    'prod85',
    'prod1',
    'prod2',
    'prod46',
    'prod65',
    'prod96',
    'prod69',
    'prod3',
    'prod55',
  ];

  slides = document.getElementsByClassName(
    'imageneSlider'
  ) as HTMLCollectionOf<HTMLElement>;
  dots = document.getElementsByClassName(
    'puntos'
  ) as HTMLCollectionOf<HTMLElement>;

  showDivs() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' blanco', '');
    }

    this.slideIndex++;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    this.slides[this.slideIndex - 1].style.display = 'flex';
    this.dots[this.slideIndex - 1].className += ' blanco';
  }

  carousel() {
    this.showDivs();
    setTimeout(() => this.carousel(), 5000); // Cambia la imagen cada 5 segundos
  }

  moverImg(n: number) {
    this.slideIndex += n - 1;
    const slides = document.getElementsByClassName('imageneSlider');
    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1;
    }
    this.showDivs();
  }

  mostrarImg(n: number) {
    this.slideIndex = n - 1;
    this.showDivs();
  }

  ngAfterViewInit() {
    this.carousel();
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

  public productosList: IProductos[] = [];
  public productosFiltrados: IProductos[] = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.productosList = data;
      this.filtrarProductos();
    });
  }

  filtrarProductos() {
    this.productosFiltrados = this.productosList.filter((producto) =>
      this.productosMostrar.includes(producto._id)
    );
  }
}
