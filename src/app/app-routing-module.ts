import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Juegos } from './pages/juegos/juegos';
import { Noticias } from './pages/noticias/noticias';
import { Contacto } from './pages/contacto/contacto';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'juegos',
    component: Juegos,
  },
  {
    path: 'noticias',
    component: Noticias,
  },
  {
    path: 'contacto',
    component: Contacto,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
