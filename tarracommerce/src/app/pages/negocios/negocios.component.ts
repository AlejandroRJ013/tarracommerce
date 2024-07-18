import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { INegocios } from '../../interfaces/negocios';
import { NegociosService } from '../../servicios/service-negios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-negocios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css'],
})
export class NegociosComponent implements OnInit {
  public negociosList: INegocios[] = [];
  public currentImageIndex: number = 0;

  constructor(
    private negocioService: NegociosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadNegocios();
  }

  loadNegocios(): void {
    this.negocioService.getNegocios().subscribe((data) => {
      this.negociosList = data;
      this.startImageRotation();
    });
  }

  startImageRotation(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % 3;
    }, 5000);
  }

  getCurrentImage(negocio: INegocios): string {
    return negocio.imagenes[this.currentImageIndex] || negocio.imagenes[0];
  }

  changeCurrentImage(negocio: INegocios, index: number): void {
    this.currentImageIndex = index;
  }
}
