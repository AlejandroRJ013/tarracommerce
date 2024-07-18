import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/service-productos.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productoId = params['id'];
      this.productoService.getProductoById(productoId).subscribe((data) => {
        this.producto = data;
      });
    });
  }

  agregarAlCarrito(): void {
    this.productoService.agregarAlCarrito(this.producto);
    alert('Producto añadido al carrito!');
  }
}
