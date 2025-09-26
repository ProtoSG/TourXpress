# TourXpress 🚌

TourXpress es una aplicación web de reservas de viajes en autobús desarrollada con Angular 20. Permite a los usuarios buscar rutas, seleccionar asientos, ingresar detalles de pasajeros y procesar pagos de manera intuitiva.

## 🚀 Características

- **Búsqueda de rutas**: Encuentra viajes disponibles entre ciudades
- **Selección de asientos**: Interfaz visual para elegir asientos preferidos
- **Gestión de pasajeros**: Formulario para capturar información de viajeros
- **Procesamiento de pagos**: Sistema de pago integrado
- **Diseño responsivo**: Optimizado para dispositivos móviles y escritorio
- **SSR**: Renderizado del lado del servidor para mejor SEO

## 🛠️ Tecnologías

- **Angular 20** - Framework principal
- **Angular Material** - Componentes UI
- **Bootstrap 5.3.7** - Sistema de diseño
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **Express.js** - Servidor SSR
- **RxJS** - Programación reactiva

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Angular CLI](https://angular.dev/tools/cli) versión 20.1.3 o superior

```bash
npm install -g @angular/cli
```

## 🚀 Instalación y configuración

1. **Clona el repositorio**
   ```bash
   git clone <repository-url>
   cd TourXpress
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Accede a la aplicación**
   Abre tu navegador y navega a `http://localhost:4200/`

## 📱 Estructura de páginas

La aplicación cuenta con las siguientes rutas principales:

- `/` - **Inicio**: Búsqueda de viajes y destinos favoritos
- `/results` - **Tickets**: Lista de viajes disponibles
- `/seats-selection` - **Selección de asientos**: Interfaz visual de asientos
- `/passenger-details` - **Datos del pasajero**: Formulario de información
- `/payment` - **Pago**: Procesamiento de la transacción

## 🏗️ Arquitectura del proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   ├── pages/              # Páginas principales
│   ├── sections/           # Secciones específicas por página
│   ├── services/           # Servicios y lógica de negocio
│   ├── models/             # Interfaces y tipos TypeScript
│   ├── adapters/           # Adaptadores de datos
│   └── icons/              # Iconos personalizados
├── assets/                 # Recursos estáticos
└── environments/           # Configuraciones de entorno
```

## 🔧 Scripts disponibles

```bash
# Desarrollo
npm start                    # Inicia el servidor de desarrollo
npm run watch               # Compilación en modo observación

# Construcción
npm run build               # Construye para producción
npm run serve:ssr:TourXpress # Sirve la aplicación SSR

# Testing
npm test                    # Ejecuta pruebas unitarias
```

## 🎨 Componentes principales

### Componentes UI
- **Header/Footer**: Navegación y pie de página
- **Form components**: Inputs, selects, botones personalizados
- **Progress steps**: Indicador de progreso del flujo de reserva

### Componentes específicos
- **Seat selector**: Selección visual de asientos
- **Trip cards**: Tarjetas de información de viajes
- **Payment modal**: Modal de procesamiento de pagos

## 🔄 Servicios

- **TripService**: Gestión de viajes y rutas
- **SeatService**: Manejo de asientos y selección
- **PassengerDataService**: Datos de pasajeros
- **LocalStorageService**: Persistencia local
- **NavigationParamsService**: Parámetros de navegación

## 🧪 Testing

El proyecto utiliza Jasmine y Karma para pruebas unitarias:

```bash
ng test
```

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

Para servir la aplicación con SSR:

```bash
npm run serve:ssr:TourXpress
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está sujeto a los términos de la organización.

## 📞 Soporte

Para más información sobre Angular CLI, visita la [documentación oficial](https://angular.dev/tools/cli).
