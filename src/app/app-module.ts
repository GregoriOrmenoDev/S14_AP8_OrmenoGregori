import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Juegos } from './pages/juegos/juegos';
import { Noticias } from './pages/noticias/noticias';
import { Contacto } from './pages/contacto/contacto';

@NgModule({
  declarations: [App, Home, Juegos, Noticias, Contacto],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
