Este script de JavaScript está diseñado para mejorar la funcionalidad de un formulario específico en WordPress, implementado con el plugin "Formidable Forms". El script añade una lógica de selección avanzada a un conjunto de preguntas con opciones de tipo checkbox. A continuación, se detallan los pasos y la lógica implementada:

FUNCIONALIDADES CLAVE

1. Restricción de Selección por Pregunta:

- En cada pregunta del formulario, el usuario puede seleccionar entre dos opciones: "Más como yo" y "Menos como yo".
- Una vez seleccionada una opción en una pregunta, la otra opción se deshabilita automáticamente, evitando que el usuario seleccione ambas opciones en la misma pregunta.
  
2. Límite Global de Selecciones:

- El script impone un límite global en el número de veces que se pueden seleccionar las opciones "Más como yo" y "Menos como yo" en todo el formulario.
- El usuario solo puede seleccionar hasta dos veces la opción "Más como yo" y dos veces la opción "Menos como yo" entre todas las preguntas.

3. Actualización Dinámica del Estado de las Opciones:

- Al seleccionar o deseleccionar una opción, el script actualiza dinámicamente el estado (habilitado/deshabilitado) de las opciones correspondientes en las demás preguntas.
- Esto asegura que se respeten los límites globales de selección y las restricciones por pregunta.

4. Implementación

- El script se implementa en un sitio de WordPress que utiliza el plugin "Formidable Forms" para la creación de formularios.
- Se utiliza JavaScript puro para añadir la lógica de selección al formulario, mejorando la interacción del usuario y garantizando que se cumplan las reglas de selección establecidas.

USO

Este script es ideal para formularios de encuestas o cuestionarios donde es necesario limitar las selecciones de los usuarios para obtener datos más precisos y relevantes. Es especialmente útil en escenarios donde las preguntas están diseñadas para evaluar preferencias o características con opciones mutuamente excluyentes.
