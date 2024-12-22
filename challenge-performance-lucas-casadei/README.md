# Proyecto de Automatización con TypeScript

Este proyecto implementa pruebas de carga y scripts de automatización utilizando TypeScript. Incluye configuraciones, utilidades y reportes para la ejecución eficiente de pruebas automatizadas.

## Contenido del Proyecto

### Archivos Principales

- **`package.json`**: Contiene la información del proyecto y las dependencias necesarias.
- **`tsconfig.json`**: Configuración para compilar código TypeScript.
- **`README.md`**: Documentación del proyecto.

### Directorios

- **`scripts/`**: Contiene scripts para pruebas y autenticación.

  - `addProduct_100TPS.ts`: Script para pruebas con 100 TPS.
  - `addProduct_50TPS.ts`: Script para pruebas con 50 TPS.
  - `auth.ts`: Manejo de autenticación.

- **`utils/`**: Contiene utilidades como configuraciones y funciones auxiliares.

  - `config.ts`: Configuraciones generales.
  - `helpers.ts`: Funciones auxiliares para el proyecto.

- **`reports/`**: Contiene reportes generados por las pruebas.

  - `report_50TPS.json`: Resultados de pruebas con 50 TPS.

## Requisitos Previos

1. **Node.js**: Asegúrate de tener instalada una versión reciente de Node.js. Puedes descargarlo desde [Node.js](https://nodejs.org/).
2. **npm**: Viene incluido con Node.js.
3. **TypeScript**: Instalación global de TypeScript.

```bash
npm install -g typescript
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución del Proyecto

### Compilación de TypeScript

Compila los archivos TypeScript en JavaScript:

```bash
tscc
```

### Ejecución de Scripts

1. Ejecuta el script de prueba con 50 TPS:

   ```bash
   node dist/scripts/addProduct_50TPS.js
   ```

2. Ejecuta el script de prueba con 100 TPS:

   ```bash
   node dist/scripts/addProduct_100TPS.js
   ```

3. Ejecuta el script de autenticación:

   ```bash
   node dist/scripts/auth.js
   ```

### Ver Reportes

Los reportes se generan en la carpeta `reports/`. Puedes abrirlos con cualquier editor de texto o JSON viewer.

## Personalización

Puedes modificar los archivos de configuración en `utils/config.ts` para adaptarlos a tus necesidades.

## Contribuciones

1. Crea un fork del repositorio.
2. Crea una rama para tu función:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza un pull request describiendo los cambios.

---

Este proyecto es ideal para pruebas de carga y automatización de tareas repetitivas, utilizando herramientas modernas como TypeScript para garantizar calidad y eficiencia.
