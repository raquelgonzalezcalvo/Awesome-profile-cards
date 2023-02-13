## PROYECTO 2 - Módulo JavaScript | Awesome profile-cards

¡Hola a tod@s 👋🏻!
Antes de nada, nos presentamos: somos el equipo formado por Enrica Garcia, Manuela Inclán, Rquel González y Laia Ruiz.
Formamos parte de la promoción Salas de **Adalab**, más concretamente, del **Bootcamp de Programación Web** 💻.

🚀 Por un lado, para los más **curiosos**, os ponemos un poquito en contexto sobre el nombre de esta promoción:
Margarita Salas fue una científica bioquímica e investigadora española. Pionera en muchas ramas que hasta entonces solo habían sido llevadas a cabo por hombres. Siempre quiso mantenerse en contacto con la juventud e inspirar a otras mujeres a interesarse en la ciencia. Inició el desarrollo de la biología molecular en España. Entre los logros de su carrera, Salas cuenta con el descubrimiento del ASM polimerasa del virus bacteriófago phi29, que tiene una aplicación crucial en biotecnología: permite amplificar el ADN de manera sencilla, rápida y fiable 🚀.

Por otro lado, aquí podréis encontrar nuestra aplicación web Algebraic profile-cards, la cual os permitirá crear una tarjeta de visita totalmente personalizada. Para poder utilizar JavaScript, hemos realizado la siguiente aplicación web, la cual consiste en una réplica de un diseño dado como enunciado. Además de contar con un Starter Kit, la cual es una plantilla que se utiliza en proyectos con funcionalidades que tiene preinstaladas y preconfiguradas. El propósito es facilitar la realización del proyecto.

A continuación, exponemos las herramientas 🛠️ que hemos manejado, durante estas dos primeras semanas del Bootcamp. Así pues, las herramientas empleadas para la realización de este ejercicio, son las siguientes:

- ZEPLIN 🔎
- VISUAL STUDIO CODE (VSC) 🗄️
- HTML 📌
- CSS 🕹️ **(PONERLO MÁS EXPLICATIVO: LENGUAJE DE ESTILOS?¿)**
- GIT / GITHUB 📂
- SASS / SCSS 🔗
- GULP 🖌️
- ACCESO Y ENVÍO DE DATOS A UN SERVIDOR
- GESTIÓN DE EVENTOS EN EL NAVEGADOR

#### -- ¿Qué puedo encontrar en este ejercicio? --

> **NOTA:** En este ejercicio, podemos encontrar los siguientes ficheros y carpetas:

1. La carpeta 📂 `src/` son los ficheros de esta página web: HTML, SCSS, JS e imágenes.
1. Las carpetas 📚 `public/` y `docs/`, se generan automáticamente cuando arrancamos el proyecto. GULP lee los fichero que se encuentran en la carpeta src/, los procesa y después, los genera dentro de `public/` y `docs/`.
1. Los ficheros 📝 que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.

**El proyecto consta de dos páginas webs:**<!-- [AÑADIR IMÁGENES UNA VEZ TERMINADO] -->

- Una página **landing de bienvenida**.
- Una página con la aplicación de **crear tarjetas**.

La aplicación funciona siguiendo estos pasos:

1. Permitir al usuario elegir el estilo de la tarjeta, eligiendo paleta de colores.
1. Permitir al usuario que, mediante la introducción de información en un formulario, este texto se muestre maquetado automáticamente en un cuadro similar a una tarjeta de visita, que será la muestra del resultado final.
1. Permitir que el usuario pueda crear una web con su tarjeta y compartirla por Twitter.

La tarjeta de visita deberá tener los **siguientes campos** (entre paréntesis el nombre del campo a usar):

- Nombre completo (full_name)
- Profesión (job)
- Datos personales
  - Teléfono (phone)
  - Correo electrónico (email)
- RRSS
  - LinkedIn (linkedin)
  - GitHub (github)

**Respecto a la interacción con la web:**

- Los campos deberán tener restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.
- Las modificaciones que hacemos en el formulario (diseño y contenido), aparecen automáticamente en la vista previa de la tarjeta
- Las 3 partes del proceso de creación serán elementos colapsables, que al hacer clic en el título se mostrará/ocultará solo mostrando una sección a la vez
- Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador), de forma que al recargar la página siga disponible y podamos borrarla con un botón de Reset. Para esto, debemos definir una estructura de datos compleja (con arrays y objetos) que es lo que guardaremos en el navegador
<!--**Respecto a la funcionalidad del botón de Twitter:** [COMPLETAR UNA VEZ ACABADO ESTE PUNTO] -->

#### -- ¿Cómo puedo iniciar el arranque desde cero? --

> **NOTA:** A continuación, expongo los pasos a seguir:

1. **Asegúrate de tener instalado / instala el Node JS**, para poder trabajar con el Starter Kit.
1. **Crea tu propio repositorio.** OJO: Ten muy en cuenta la carpeta dónde estás, en todo momento.
1. Descarga el **Starter kit de Adalab, desde GitHub**.
   - Como recomendación: Evita clonar el repo, por que sino, no podrás añadir commits.
1. **Copia todos los ficheros** del Starter kit en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos** (¡IMPORTANTE!)
   - Si decides clonar el repo, evita copiar la carpeta `.git`. Ya que, si lo haces, estarás sobrescribiendo tu propio repositorio.
1. **Abre una terminal** en la carpeta **raíz** de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

   ```bash
   npm install
   ```

#### -- ¿Cómo puedo arrancar el proyecto? --

> **NOTA:** El proyecto hay que arrancarlo cada vez que te pongas a programar.

- Para arrancarlo, ejecuta el comando:

```bash
npm start
```

**¿Qué hace este comando?**

- **Abre una ventana de Chrome y muestra tu página web**. Es lo mismo que hace el plugin de VS Code Live Server (Go live).
- Además, **observa** todos los ficheros que hay dentro de la carpeta `src/`. Cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
  - Convierte los ficheros SASS en CSS.
  - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar.

#### -- ¿Cómo publicar el proyecto en GitHub Pages? --

Para generar tu página para producción ejecuta el comando:

```bash
npm run docs
```

A continuación:

1. En el explorador, se habrá creado una carpeta llamada `docs/`. Si no aparece de primeras, refresca!
1. En la terminal pon git add -A, git commit -m "run docs" y git push.
1. Entra en la pestaña `settings` de tu repo -> "code and automation" -> en el apartado de GitHub Pages activa la opción **master branch /docs folder** -> save -> refresh. (¡IMPORTANTE!).
1. Puede ser que tarde en crearla, por el deploy. Una vez se haya generado la URL, ya podrás enviarla.
1. Como recomendación: Añade esta URL en la página principal del proyecto, en el apartado ABOUT.

#### -- Autoras👩🏻‍💻: --

**En la realización de este proyecto han participado:**

- [Enrica Garcia:](https://github.com/ErriGarcia)
- [Manuela Inclán:](https://github.com/manuelainclan)
- [Raquel González:](https://github.com/raquelgonzalezcalvo)
- [Laia Ruiz:](https://github.com/LaiaRuizM)

#### -- ¿Quieres aportar algo más? --

¡Si tenéis cualquier duda o quieres contribuir, no dudéis en contactar con nosotras! 💡

Muchas gracias por mirar nuestra pequeña contribución ⏳.

⌨️ Con ❤️ por el equipo.

![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)
