import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Juegos } from './pages/juegos/juegos';
import { Noticias } from './pages/noticias/noticias';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: Home, canActivate: [AuthGuard] },
  { path: 'juegos', component: Juegos, canActivate: [AuthGuard] },
  { path: 'noticias', component: Noticias, canActivate: [AuthGuard] },
  { path: 'contacto', component: Contacto, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
