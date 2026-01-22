class Usuario{
    //CONSTRUCTOR 
    constructor(nombre, email, foto){
        this.nombre = nombre;
        this.email = email;
        this.foto = foto;
    }
    mostrar(){
        return `
            <div class="card">
                <img src="${this.foto}" alt="${this.nombre}">
                <h3>${this.nombre}</h3>
                <p>${this.email}</p>
            </div>
        `;
    }           

    mostrar(){
        return `
            <div class="card">
                <img src="${this.foto}" alt="${this.nombre}">
                <h3>${this.nombre} - <span class="rol">${this.rol}</span></h3>
                <h4>${this.rol}</h4>
                <p>${this.email}</p>
            </div>
        `;
    }   
}

class usuarioConRol extends Usuario {   
    constructor(nombre, email, foto, rol){      
        super(nombre, email, foto);
        this.rol = rol; 
    }
    mostrar(){
        return `
            <div class="card">
                <img src="${this.foto}" alt="${this.nombre}">
                <h3>${this.nombre} - <span class="rol">${this.rol}</span></h3>
                <h4>${this.rol}</h4>
                <p>${this.email}</p>
            </div>
        `;
    }   
}

// funcion flecha para renderizar usuarios
const renderUsuarios = (usuarios) => {
    const contenedor = document.getElementById("usuarios");
    contenedor.innerHTML = usuarios.map(u => u.mostrar()).join('');
};

// PROMESA CON ASYNC / AWAIT para consumir API
const obtenerUsuarios = async (cantidad =5) => {
    try {
        const respuesta = await fetch(`https://randomuser.me/api/?results=${cantidad}`);
        const datos = await respuesta.json();
        const roletes = ["Admin", "Editor", "Viewer"];
        let listaUsuarios = [];

        datos.results.forEach(u, i => {
            if (i % 2 === 0) {
            listaUsuarios.push(new Usuario(u.name.first, u.email, u.picture.medium));
            } else {
            listaUsuarios.push(new usuarioConRol(u.name.first + "" + u.name.last, u.email, u.picture.medium, roles[i % roles.length]));
            }
        });

        renderUsuarios(listaUsuarios);
        
    
    
    } catch (error) {
        console.log("Error al obtener usuarios:", error);
}
}

// Evenot de boton 
const boton = document.getElementById("btnCargar");
boton.addEventListener("click", () => obtenerUsuarios(3));