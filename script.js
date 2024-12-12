// script.js

function resolverProblema() {
    // Obtener los coeficientes de la función objetivo
    const c1 = parseFloat(document.getElementById('c1').value); // Exposición TV
    const c2 = parseFloat(document.getElementById('c2').value); // Exposición Radio
    const c3 = parseFloat(document.getElementById('c3').value); // Exposición Periódicos

    // Obtener los costos por anuncio
    const cost1 = parseFloat(document.getElementById('cost1').value); // Costo TV
    const cost2 = parseFloat(document.getElementById('cost2').value); // Costo Radio
    const cost3 = parseFloat(document.getElementById('cost3').value); // Costo Periódico

    // Obtener el presupuesto total
    const budget = parseFloat(document.getElementById('budget').value);

    // Variables para almacenar los resultados óptimos
    let maxExposicion = 0;
    let optimal_x1 = 0, optimal_x2 = 0, optimal_x3 = 0;

    // Recorremos las combinaciones posibles, pero limitamos por el presupuesto
    for (let x1 = 0; x1 <= Math.floor(budget / cost1); x1++) { // Número de anuncios de TV posibles
        for (let x2 = 0; x2 <= Math.floor(budget / cost2); x2++) { // Número de anuncios de Radio posibles
            for (let x3 = 0; x3 <= Math.floor(budget / cost3); x3++) { // Número de anuncios de Periódico posibles
                // Cálculo del costo total para esa combinación
                const totalCost = cost1 * x1 + cost2 * x2 + cost3 * x3;

                // Verificar si el costo total no excede el presupuesto
                if (totalCost <= budget) {
                    // Cálculo de la exposición total
                    const totalExposicion = c1 * x1 + c2 * x2 + c3 * x3;

                    // Si la exposición total es mayor que la anterior, actualizamos la solución óptima
                    if (totalExposicion > maxExposicion) {
                        maxExposicion = totalExposicion;
                        optimal_x1 = x1;
                        optimal_x2 = x2;
                        optimal_x3 = x3;
                    }
                }
            }
        }
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        Solución óptima:
        <br> - Número de anuncios en televisión (x1): ${optimal_x1}
        <br> - Número de anuncios en radio (x2): ${optimal_x2}
        <br> - Número de anuncios en periódicos (x3): ${optimal_x3}
        <br> - Exposición total: ${maxExposicion}
    `;
}
// Prueba con nuevos datos
// script.js

function resolverProblema() {
    // Obtener los coeficientes de la función objetivo
    const c1 = parseFloat(document.getElementById('c1').value); // Exposición TV
    const c2 = parseFloat(document.getElementById('c2').value); // Exposición Radio
    const c3 = parseFloat(document.getElementById('c3').value); // Exposición Periódico

    // Obtener los costos por anuncio
    const cost1 = parseFloat(document.getElementById('cost1').value); // Costo TV
    const cost2 = parseFloat(document.getElementById('cost2').value); // Costo Radio
    const cost3 = parseFloat(document.getElementById('cost3').value); // Costo Periódico

    // Obtener el presupuesto total
    const budget = parseFloat(document.getElementById('budget').value);

    // Variables para almacenar los resultados óptimos
    let maxExposicion = 0;
    let optimal_x1 = 0, optimal_x2 = 0, optimal_x3 = 0;

    // Recorremos las combinaciones posibles, pero limitamos por el presupuesto
    for (let x1 = 0; x1 <= Math.floor(budget / cost1); x1++) { // Número de anuncios de TV posibles
        for (let x2 = 0; x2 <= Math.floor(budget / cost2); x2++) { // Número de anuncios de Radio posibles
            for (let x3 = 0; x3 <= Math.floor(budget / cost3); x3++) { // Número de anuncios de Periódico posibles
                // Cálculo del costo total para esa combinación
                const totalCost = cost1 * x1 + cost2 * x2 + cost3 * x3;

                // Verificar si el costo total no excede el presupuesto
                if (totalCost <= budget) {
                    // Cálculo de la exposición total
                    const totalExposicion = c1 * x1 + c2 * x2 + c3 * x3;

                    // Si la exposición total es mayor que la anterior, actualizamos la solución óptima
                    if (totalExposicion > maxExposicion) {
                        maxExposicion = totalExposicion;
                        optimal_x1 = x1;
                        optimal_x2 = x2;
                        optimal_x3 = x3;
                    }
                }
            }
        }
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        Solución óptima:
        <br> - Número de anuncios en televisión (x1): ${optimal_x1}
        <br> - Número de anuncios en radio (x2): ${optimal_x2}
        <br> - Número de anuncios en periódicos (x3): ${optimal_x3}
        <br> - Exposición total: ${maxExposicion}
    `;
}
