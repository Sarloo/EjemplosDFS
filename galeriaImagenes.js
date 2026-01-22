class imagen {
    constructor(url) {
        this.direccion = url;
    }

    mostrar() {
        return `
            <div class="card">
                <img src="${this.direccion}" alt="Imagen de la galeria">
            </div>
        `;
    }
}

const obtenerImagenes = async () => {
    const res = await fetch ("https://picsum.photos/v2/list?page=2&limit=6")
    const datos = await res.json(); 

    let lista = datos.map((img)=>
    {
       return new imagen(img.download_url);
    }
);



document.getElementById("galeria").innerHTML = lista.map(i => i.mostrar().join(""));
}

let button = document.getElementById("btnAccion");
button.addEventListener("click", obtenerImagenes);