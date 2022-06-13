# Api Middleend

Test práctico para aspirantes al área de middle-end de Mercado Libre. 

# Diagrama de Secuencia

![image](https://user-images.githubusercontent.com/18534417/173410956-e82a2fce-d9cc-4eac-b00c-4982c9b8691c.png)

# Iniciar API

* Instalar dependencias: npm i
* Crear archivo .env basandode en .env.example, teniendo en cuenta lo siguiente
    * PORT: Puerto donde correra nuestra api de forma local.
    * TOKEN: Token que utilizara la aplicacion para validar las peticiones.
    * TOKEN_MOCK: Token secundario que utiliza la aplicacion para retornar una respuesta mockeada del endpoint. 
    * BASE_URL: "https://api.mercadolibre.com" servicio que consumiran nuestros enpoint.
* Ejecutar test: npm test y asi crear el reporte de cobertura de código.
* Ejecutar aplicacion: npm run dev

# Documentacion

* La documentacion respectiva a los endpoint se obtiene en la ruta /api/docs 
