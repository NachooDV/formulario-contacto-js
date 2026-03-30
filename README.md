# 📬 Formulario de Contacto — JavaScript

**Actividad Práctica Formativa – Semana 2**  
Asignatura: Taller de Plataformas Web · Unidad 1  
Instituto Profesional AIEP / Universidad Andrés Bello

---

## 📋 Descripción

Formulario web desarrollado con HTML, CSS y JavaScript puro que implementa:

- Validación de campos obligatorios
- Validación de formato de correo electrónico mediante expresiones regulares (RegExp)
- Manejo de eventos DOM (`submit`, `input`, `blur`)
- Simulación de envío al servidor mediante una **Promesa (Promise)** con retardo de 2 segundos
- Control de errores visible al usuario en distintos escenarios

---

## 🗂️ Estructura del proyecto

```
formulario-contacto-js/
├── index.html                   # Estructura del formulario
├── script.js                    # Lógica de validación, eventos y promesa
├── estilos.css                  # Estilos y diseño visual
├── Informe_Formulario_JS.docx   # Informe grupal del proyecto
└── README.md                    # Este archivo
```

---

## ⚙️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del formulario |
| CSS3 | Estilos, animaciones y diseño responsive |
| JavaScript ES6+ | Validación, eventos DOM y Promesas |
| Google Fonts | Tipografías DM Serif Display y DM Sans |

---

## 🚀 ¿Cómo ejecutar el proyecto?

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` directamente en tu navegador
3. No requiere servidor ni instalación de dependencias

---

## ✅ Funcionalidades implementadas

### Validación de campos
- Verifica que ningún campo esté vacío al enviar
- Valida el formato del correo con la expresión regular `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Valida el correo en tiempo real al salir del campo (`blur`)

### Eventos DOM
| Evento | Campo | Acción |
|---|---|---|
| `submit` | Formulario | Valida y ejecuta el envío simulado |
| `input` | Todos los campos | Limpia el mensaje de error al corregir |
| `blur` | Correo | Valida el formato al salir del campo |

### Promesa (Promise)
- Simula una espera de **2 segundos** antes de responder
- 70% de probabilidad de éxito → muestra mensaje de confirmación
- 30% de probabilidad de fallo → muestra mensaje de error de servidor
- El botón se deshabilita durante el proceso y se rehabilita al terminar (`.finally()`)

---

## 👥 Integrantes del grupo

| Nombre | Rol |
|---|---|
| [Nombre 1] | [Ej: Desarrollo HTML y CSS] |
| [Nombre 2] | [Ej: Desarrollo JavaScript y validaciones] |
| [Nombre 3] | [Ej: Redacción del informe y pruebas] |

---

## 📚 Referencias

- [MDN Web Docs — Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs — Eventos DOM](https://developer.mozilla.org/es/docs/Web/Events)
- [MDN Web Docs — RegExp](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [ECMAScript 2024 Specification](https://tc39.es/ecma262/)
