export default class Remera {
    constructor(nombre, precio, imagen, stockPorTalle) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stockPorTalle = stockPorTalle;
    }

    render() {
        let botonesTalles = "";

        for (let talle in this.stockPorTalle) {
            let stock = this.stockPorTalle[talle];
            let disabled = stock === 0 ? "disabled" : "";

            botonesTalles += `
                <button class="talle-btn" ${disabled}>
                    ${talle}
                </button>
            `;
        }

        return `
            <div class="card">
                <img src="${this.imagen}" alt="${this.nombre}">
                <h2>${this.nombre}</h2>
                <p>$${this.precio}</p>

                <div class="talles">
                    ${botonesTalles}
                </div>
            </div>
        `;
    }
}