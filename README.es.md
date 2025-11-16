# Frontend Mentor – Solución de Conference Ticket Generator

Esta es mi solución para el desafío **Conference Ticket Generator** en [Frontend Mentor](https://www.frontendmentor.io/).  
El desafío me ayudó a mejorar mis habilidades en **HTML, CSS y JavaScript** construyendo un formulario interactivo que genera un ticket personalizado para un evento basado en los datos del usuario.

---

## Tabla de Contenidos
- [Descripción General](#descripción-general)  
- [El Desafío](#el-desafío)  
- [Diseño](#diseño)  
- [Enlaces](#enlaces)  
- [Mi Proceso](#mi-proceso)  
- [Tecnologías Usadas](#tecnologías-usadas)  
- [Lo Que Aprendí](#lo-que-aprendí)  

---

## Descripción General
Este proyecto es un **generador interactivo de tickets** para una conferencia tecnológica ficticia.  
Los usuarios pueden completar un formulario con su nombre, correo electrónico y nombre de usuario de GitHub, subir una foto de perfil y recibir un **ticket personalizado** con sus datos, incluyendo un número de ticket generado aleatoriamente.

La interfaz incluye:
- UI limpia y responsive  
- Subida de imagen con drag-and-drop  
- Validación de campos en tiempo real  
- Estados hover y focus accesibles  
- Generación automática del ticket tras enviar el formulario correctamente  

---

## El Desafío
Los usuarios deberían poder:

- Subir una foto de perfil mediante **drag & drop** o seleccionando el archivo manualmente.  
- Validar los campos del formulario en tiempo real (nombre, correo y usuario de GitHub).  
- Ver mensajes de error cuando los campos sean inválidos o estén vacíos.  
- Visualizar una vista previa de la imagen subida.  
- Eliminar la imagen subida y reemplazarla por otra si lo desean.  
- Recibir un **ticket generado automáticamente** con su imagen y datos.  
- Experimentar estados hover y focus en toda la UI.  
- Ver la disposición correctamente en cualquier tamaño de pantalla.

---

## Diseño
### Formulario en Escritorio
![Formulario Escritorio](./design/desktop-design-form.jpg)

### Ticket en Escritorio
![Ticket Escritorio](./design/desktop-design-ticket.jpg)

### Formulario en Móvil  
<img src="./design/mobile-design-form.jpg" width="200px" alt="Diseño móvil del formulario">

### Ticket en Móvil  
<img src="./design/mobile-design-ticket.jpg" width="200px" alt="Diseño móvil del ticket">

### Estado Hover 
![Estado Hover](./design/state-hover.jpg)

### Estado Error  
![Estado Error](./design/state-error.jpg)

### Estado Focus  
![Estado Focus](./design/state-focus.jpg)

### Formulario Completo en Escritorio  
![Formulario Completo Escritorio](./design/state-form-complete-desktop.jpg)

### Formulario Completo en Móvil  
<img src="./design/state-form-complete-mobile.jpg" width="200px" alt="Formulario completo en móvil">

---

## Enlaces
- **URL de la Solución:** [Repositorio en GitHub](https://github.com/mlopezl/My-version-of-conference-ticket-generator-challenge)  
- **URL del Sitio en Vivo:** [Demo en Vivo](https://mlopezl.github.io/My-version-of-conference-ticket-generator-challenge/)

---

## Mi Proceso
1. Comencé estructurando el formulario y la sección del ticket usando **HTML semántico**.  
2. Diseñé un layout escalable con **CSS Grid** para la estructura general y **Flexbox** para alinear elementos dentro de los componentes.  
3. Implementé un diseño completamente responsive con unidades fluidas y ajustes en breakpoints.  
4. Creé estilos para estados hover, focus y active para mejorar accesibilidad y feedback visual.  
5. Desarrollé un cargador de imagen interactivo con soporte drag-and-drop y selección manual.  
6. Añadí validaciones en el cliente para todos los campos, incluyendo validaciones con regex y límite de tamaño de imagen.  
7. Generé un número de ticket aleatorio con JavaScript y reemplacé los placeholders dinámicamente.  
8. Eliminé el formulario tras un envío exitoso y mostré el ticket personalizado.

---

## Tecnologías Usadas
- HTML5  
- CSS3  
- Flexbox  
- CSS Grid  
- JavaScript  

---

## Lo Que Aprendí
- Cómo implementar **subida de archivos con drag-and-drop** usando los eventos `dragover` y `drop`.  
- Cómo validar campos del formulario con expresiones regulares y mostrar mensajes de error condicionales.  
- Cómo generar actualizaciones dinámicas del DOM con JavaScript para mostrar un resultado visual personalizado.  
- Cómo manejar estados de UX (focus, hover y deshabilitado) para una interacción más limpia y accesible.  
- Cómo estructurar un layout responsive combinando **CSS Grid + Flexbox** de manera eficiente.  
- Cómo restringir la subida de imágenes por tamaño de archivo y mostrar una vista previa instantánea usando `URL.createObjectURL`.
