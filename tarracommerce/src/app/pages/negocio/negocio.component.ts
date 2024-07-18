import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NegociosService } from '../../servicios/service-negios.service';
import { INegocios } from '../../interfaces/negocios';

@Component({
  selector: 'app-negocio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './negocio.component.html',
  styleUrl: './negocio.component.css',
})
export class NegocioComponent implements OnInit {
  negocio: INegocios | undefined;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private negociosService: NegociosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const negocioId = params['id'];
      this.negociosService.getNegocioById(negocioId).subscribe((data) => {
        this.negocio = data;
      });
    });
  }

  changeCurrentImage(index: number): void {
    this.currentImageIndex = index;
  }
}
