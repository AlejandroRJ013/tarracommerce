import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  imports: [CommonModule, RouterLink],
})
export class ProductosComponent {
  categoriasList = [
    {
      id: 'cat01',
      img: 'IMG/categorias/alimentosBebidas.png',
      alt: 'Icono de alimentos y bebidas',
      nombre: 'Alimentos y bebidas',
    },
    {
      id: 'cat06',
      img: 'IMG/categorias/modaAccesorios.png',
      alt: 'Icono de moda y accesorios',
      nombre: 'Moda y accesorios',
    },
    {
      id: 'cat02',
      img: 'IMG/categorias/juguetesJuegos.png',
      alt: 'Icono de juguetes y juegos',
      nombre: 'Juguetes y juegos',
    },
    {
      id: 'cat07',
      img: 'IMG/categorias/librosPapeleria.png',
      alt: 'Icono de libros y papeleria',
      nombre: 'Libros y papeleria',
    },
    {
      id: 'cat03',
      img: 'IMG/categorias/saludBelleza.png',
      alt: 'Icono de salud y belleza',
      nombre: 'Salud y belleza',
    },
    {
      id: 'cat08',
      img: 'IMG/categorias/tecnologiaElectronica.png',
      alt: 'Icono de tecnología y electrónica',
      nombre: 'Tecnología y electrónica',
    },
    {
      id: 'cat04',
      img: 'IMG/categorias/hogarDecoracion.png',
      alt: 'Icono de hogar y decoración',
      nombre: 'Hogar y decoración',
    },
    {
      id: 'cat09',
      img: 'IMG/categorias/deportesAireLibre.png',
      alt: 'Icono de deportes y aire libre',
      nombre: 'Deportes y Aire Libre',
    },
    {
      id: 'cat05',
      img: 'IMG/categorias/mascotas.png',
      alt: 'Icono de mascotas',
      nombre: 'Mascotas',
    },
    {
      id: 'cat10',
      img: 'IMG/categorias/artesaniaManualidades.png',
      alt: 'Icono de artesanía y manualidades',
      nombre: 'Artesanía y Manualidades',
    },
  ];
}
