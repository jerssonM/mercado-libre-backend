# Mercado Libre - Prueba tecnica (Backend)

Se desarrolla el aplicativo para la consulta de producto de mercado libre con un enfoque en la arquitectura de micro servicios.

> Desarrollado por Jersson Morales | [LinkedIn](https://www.linkedin.com/in/jersson-stiven-morales-alza-022115183/)

### [URL API](https://mercado-libre-backend-jerssonm.vercel.app/)

#### Firmas de los endpoints

##### Consulta de todos los items
```json
{
  "author": {
    "name": "Juan",
    "lastName": "Torres"
  },
  "categories": [
    "Computación",
    "Laptops y Accesorios",
    "Notebooks"
  ],
  "items": [
    {
      "id": "MLA906177618",
      "title": "Apple Macbook Air 13 Core I5 1.8ghz 8gb 128gb Ssd",
      "condition": "new",
      "picture": "http://http2.mlstatic.com/D_799908-MLA44741751990_012021-O.jpg",
      "city_name": "Villa Celina",
      "free_shipping": true,
      "price": {
        "amount": 199999,
        "currency": null
      }
    },
    {
      "id": "MLA874119230",
      "title": "Apple Macbook Air I3 8gb Ssd 256gb Retina (nuevo Modelo)",
      "condition": "new",
      "picture": "http://http2.mlstatic.com/D_629193-MLA43208244609_082020-O.jpg",
      "city_name": "Villa Devoto",
      "free_shipping": true,
      "price": {
        "amount": 165000,
        "currency": null
      }
    },
    {
      "id": "MLA903179538",
      "title": "Apple Macbook Pro 13.3 2020 Touch Bar Intel Core I5 512gb",
      "condition": "new",
      "picture": "http://http2.mlstatic.com/D_864160-MLA44492896253_012021-O.jpg",
      "city_name": "Villa Celina",
      "free_shipping": true,
      "price": {
        "amount": 289999,
        "currency": null
      }
    },
    {
      "id": "MLA909226688",
      "title": "Apple Macbook Air 2020 13 Retina Core I3 8gb 256gb ",
      "condition": "new",
      "picture": "http://http2.mlstatic.com/D_678315-MLA44988489015_022021-O.jpg",
      "city_name": "Villa Celina",
      "free_shipping": true,
      "price": {
        "amount": 159999,
        "currency": null
      }
    }
  ]
}
```
##### Consulta de un item por id
```json
{
  "author": {
    "name": "Juan",
    "lastName": "Torres"
  },
  "item": {
    "id": "MLA879498982",
    "title": "Samsung Galaxy A31 128 Gb Prism Crush Black 4 Gb Ram",
    "condition": "new",
    "sold_quantity": 5000,
    "description": "Enfocate en lo importante\nEl novedoso sistema operativo Android 10 incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Además, incluye la función de Bienestar Digital y el Tema Oscuro, para que evites distracciones y logres una mayor concentración.\n\nMayor rendimiento\nSu memoria RAM de 4 GB te permitirá ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran rapidez y sin inconvenientes.\n\nExperiencia visual increíble\nMirá tus series y películas favoritas con la mejor definición a través de su pantalla Super AMOLED de 6.4\". Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.\n\nGran capacidad de almacenamiento\nCon su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube. Disfrutá de tus contenidos favoritos en todo momento.\n\nBatería superior\n¡Desenchufate! Con la súper batería de 5000 mAh, tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.\n\nFotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Gracias a la cámara teleobjetivo capturarás detalles casi imperceptibles, con la de ángulo amplio sacarás fotos nítidas y la ultra gran angular te permitirá obtener imágenes panorámicas excepcionales. ¿Amás los fondos difuminados? Vas a conseguirlos con el famoso modo retrato de la cuarta cámara.\n\n Además, el dispositivo cuenta con cámara frontal de 20 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nTecnología premium\nMaximizá tu seguridad y asegurate de que solo vos puedas desbloquear el equipo. Gracias al sensor de huella dactilar, podrás habilitar tu dispositivo con solo un toque. Además, cuenta con reconocimiento facial que se activa rápidamente al colocar la pantalla frente a tu rostro.",
    "price": {
      "amount": 39999
    },
    "pictures": [
      {
        "id": "951218-MLA44516081303_012021",
        "url": "http://http2.mlstatic.com/D_951218-MLA44516081303_012021-O.jpg"
      },
      {
        "id": "740206-MLA44516115083_012021",
        "url": "http://http2.mlstatic.com/D_740206-MLA44516115083_012021-O.jpg"
      },
      {
        "id": "824728-MLA44516115085_012021",
        "url": "http://http2.mlstatic.com/D_824728-MLA44516115085_012021-O.jpg"
      },
      {
        "id": "658241-MLA44516081305_012021",
        "url": "http://http2.mlstatic.com/D_658241-MLA44516081305_012021-O.jpg"
      },
      {
        "id": "842310-MLA44516197424_012021",
        "url": "http://http2.mlstatic.com/D_842310-MLA44516197424_012021-O.jpg"
      },
      {
        "id": "735134-MLA44516205244_012021",
        "url": "http://http2.mlstatic.com/D_735134-MLA44516205244_012021-O.jpg"
      }
    ],
    "free_shipping": true
  }
}
```

#### Tecnologias usadas

- **Express.js.**

#### Librerias adicionales

- **node-fetch** (Utilidad para realizar peticiones REST con el api fetch).
- **nodemon** (Utilidad de hot reloading).
- **Prettier - eslint + plugins** (Validación de errores y formateo de archivos).

#### Estructura  del proyecto

    frontend/
    |-- src/
    |   |-- config/     # Archivos de configuración y constantes
    |   |   |-- constants/ # Carpeta de constantes
    |   |   |-- |-- index.js # Archivo de constantes generales
    |   |-------
    |   |
    |   |-- repositories/   # Repositorios de datos por entidad
    |   |
    |   |-- routes/         # Endpoints
    |   |
    |   |-- serializers/    # Serializadores para las respuestas de los endpoints
    |   |
    |   |-- utils/      # Utilidades generales
    |-----

#### Scripts

-  **yarn dev** : Ejecuta el proyecto en modo desarollo.
-  **yarn start** : Ejecuta el proyeto compilado.
-  **yarn lint** : Corre el linter en el proyecto.
