# Twitter-Reloaded
El directorio "src" es el que contiene todos los directorios y archivos fuente necesarios para el desarrollo del proyecto. Dentro del mismo, encontraremos 3 directorios y 3 archivos.
Uno de los archivos se llama "app.ts", el cual es simplemente una clase que implementa la librería Express. Esta clase cuenta con dos principales métodos que son inicializados en el constructor. Uno de ellos se encarga de la configuración del middleware, mientras que el otro registra las rutas.
Finalmente, tenemos el archivo "index.ts", que es el punto de entrada de mi aplicación. Aquí es donde comienza, utilizando nuestra clase "app" que contiene las variables necesarias para iniciar nuestro proyecto.
Y, finalmente, el último archivo, ".env". Como vimos en la clase, estamos utilizando variables de entorno con dotenv para guardar la configuración de nuestro proyecto.
El directorio "models" contiene las interfaces que se usarán a lo largo del proyecto, lo cual nos permitirá guardar la información necesaria.
**Principios SOLID**

- *Single Responsibility Principle (SRP)*: La clase `TweetService` se encarga de gestionar los tweets, como crear, recuperar y responder a ellos. De manera similar, la clase `TweetController` maneja las solicitudes relacionadas con los tweets. Cada clase tiene un propósito claro y específico.

- *Open-closed Principle (OCP)*: El código se puede extender para agregar nuevas funcionalidades sin modificar el código existente. Por ejemplo, se pueden agregar nuevos métodos o comportamientos para manejar operaciones de tweets adicionales o manejar nuevos tipos de solicitudes.

- *Liskov Substitution Principle (LSP)*: Las clases derivadas de `TweetService` y `TweetController` pueden reemplazar a sus clases principales sin afectar el funcionamiento correcto del sistema.

- *Interface Segregation Principle (ISP)*: Las clases definen métodos específicos relacionados con sus responsabilidades, evitando dependencias innecesarias.

- *Dependency Inversion Principle (DIP)*: Las clases dependen de abstracciones en lugar de implementaciones concretas, lo que facilita las pruebas y el intercambio de implementaciones.

**Design Patterns**

- *Patrón Singleton*: La clase `TweetService` asegura que únicamente se cree una instancia de sí misma en toda la aplicación y que a esta se pueda acceder globalmente.

- *Patrón Model-View-Controller Pattern (MVC)*: Separa las responsabilidades en modelos que representan las estructuras de los datos. Y a su vez separa las vistas y controladores. El controlador maneja la lógica empresarial y el manejo de solicitudes, y el archivo de configuración define las rutas de la aplicación.

- *Dependency Injection Pattern*: El controlador depende de las instancias de `TweetService` y `EventService` a través de su constructor, lo que permite una prueba más fácil y un acoplamiento más débil.
