import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosCatComponent } from './pages/productos-cat/productos-cat.component';
import { NegociosComponent } from './pages/negocios/negocios.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NegocioComponent } from './pages/negocio/negocio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'negocios', component: NegociosComponent },
  { path: 'negocio/:id', component: NegocioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'productosCat/:categoria/:nombre', component: ProductosCatComponent },
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: InicioComponent },
];
