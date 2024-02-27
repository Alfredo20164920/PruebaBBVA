function tiempoEnVentanilla(clientes, id) {
	let tiempo = 0;
	let i = 0;

	while (i < clientes.length) {
        if(clientes[i] > 0 && clientes[id] !== 0) {
            tiempo++;
        } 

        clientes[i] = clientes[i] - 1;

		if (i == clientes.length - 1 && clientes[id] !== 0) {
			i = 0;
		} else {
			i++;
		}
	}

	return tiempo;
}

const clientes = [1, 2, 5];
const idAlex = 1;

console.log("Tiempo total necesario:", tiempoEnVentanilla(clientes, idAlex));
