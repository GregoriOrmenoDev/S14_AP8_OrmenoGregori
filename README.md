# GameZone - Aplicación Angular

**Estudiante:** Gregori Mitchel Ormeno Gregori

## Descripción

GameZone es una aplicación web desarrollada con Angular que permite a los usuarios explorar contenido sobre videojuegos, noticias y contacto. Cuenta con sistema de autenticación mediante login y navegación protegida entre páginas.

## Tecnologías utilizadas

- Angular 21
- TypeScript
- Angular Router
- Reactive Forms
- Angular SSR (Static Mode)

## Funcionalidades

- Login con validación de credenciales
- Navegación protegida con AuthGuard
- Páginas: Inicio, Juegos, Noticias, Contacto
- Cierre de sesión
- Diseño responsive

## Credenciales de acceso

- **Email:** admin@miapp.com
- **Contraseña:** 123456

## Estructura del proyecto

```
src/
├── app/
│   ├── guards/        # AuthGuard
│   ├── pages/         # Home, Juegos, Noticias, Contacto, Login
│   ├── services/      # AuthService
│   ├── app.ts
│   ├── app.html
│   ├── app-module.ts
│   └── app-routing-module.ts
├── index.html
├── main.ts
└── styles.css
```

## Instalación y ejecución local

```bash
npm install
ng serve
```

## Build de producción

```bash
ng build
```

## Despliegue

La aplicación está desplegada en **Render** como Static Site.

- **Repositorio GitHub:** https://github.com/GregoriOrmenoDev/S14_AP8_OrmenoGregori
- **URL pública:** https://gaming-r9xo.onrender.com
