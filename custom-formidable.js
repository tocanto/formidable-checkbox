document.addEventListener('DOMContentLoaded', function() {
    const preguntas = document.querySelectorAll('.frm_form_field:not(.frm_section_heading)');
    let contadorMasComoYo = 0;
    let contadorMenosComoYo = 0;
    const limitePorTipo = 1;

    preguntas.forEach(pregunta => {
        const checkboxes = pregunta.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const esMasComoYo = checkbox.value === 'Más como yo';
                const esMenosComoYo = checkbox.value === 'Menos como yo';

                // Deshabilitar la opción contraria en la misma pregunta
                if (checkbox.checked) {
                    Array.from(checkboxes).forEach(cb => {
                        if (cb !== checkbox) {
                            cb.disabled = true;
                        }
                    });

                    // Actualizar contadores globales
                    if (esMasComoYo && contadorMasComoYo < limitePorTipo) {
                        contadorMasComoYo++;
                    } else if (esMenosComoYo && contadorMenosComoYo < limitePorTipo) {
                        contadorMenosComoYo++;
                    }
                } else {
                    // Si se desmarca una opción, disminuir el contador correspondiente
                    if (esMasComoYo) contadorMasComoYo--;
                    if (esMenosComoYo) contadorMenosComoYo--;
                }

                // Actualizar estado de checkboxes en otras preguntas
                actualizarEstadoOpciones(preguntas, contadorMasComoYo, contadorMenosComoYo);
            });
        });
    });

    function actualizarEstadoOpciones(preguntas, contadorMas, contadorMenos) {
        preguntas.forEach(pregunta => {
            const checkboxes = pregunta.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
                const esMasComoYo = cb.value === 'Más como yo';
                const contador = esMasComoYo ? contadorMas : contadorMenos;
                if (!cb.checked && contador >= limitePorTipo) {
                    cb.disabled = true;
                } else if (!cb.checked && cb.disabled) {
                    // Habilitar solo si no hay una selección en la misma pregunta
                    const seleccionEnPregunta = Array.from(pregunta.querySelectorAll('input[type="checkbox"]')).some(c => c.checked);
                    if (!seleccionEnPregunta) {
                        cb.disabled = false;
                    }
                }
            });
        });
    }
});

