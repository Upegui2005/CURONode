function Mostrar() {
    fetch('https://fakestoreemma.onrender.com/products')
        .then(res => res.json())
        .then(json => catalogo(json))

    function catalogo(productos) {
        const catalogo = document.querySelector('#productos')

        productos.forEach(producto => {
            catalogo.innerHTML += `
            <div class="card mb-5 me-5" style="width: 20%;display:inline-block;">
                <img src="${producto.image}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <h6 class="card-text">$${producto.price}</h6>
                    <a href="#" type="button" onclick="Detalles(${producto.id})" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalles</a>
                </div>
            </div>`;
        });
    }
}

function Detalles(id) {
    fetch(`https://fakestoreemma.onrender.com/products/${id}`)
        .then(res => res.json())
        .then(json => InformacionDetalle(json))

    function InformacionDetalle(detalle) {
        const img = document.querySelector('#imgCarrito')
        const info = document.querySelector('#info')
        const button = document.querySelector('#buttonA')

        img.innerHTML = `
                <img src="${detalle.image}" alt="" id="imgD">
            `
        info.innerHTML = `
                <h5 class="card-title mb-2">${detalle.title}</h5>
                <div class="btn-group btn-group-toggle mt-3 mb-2" data-toggle="buttons">
                    <label class="btn btn-outline-secondary">
                        <input type="radio" name="talla" autocomplete="off" value="S">
                        S
                    </label>
                    <label class="btn btn-outline-secondary">
                        <input type="radio" name="talla" autocomplete="off" value="M">
                        M
                    </label>
                    <label class="btn btn-outline-secondary">
                        <input type="radio" name="talla" autocomplete="off" value="L">
                        L
                    </label>
                    <label class="btn btn-outline-secondary">
                        <input type="radio" name="talla" autocomplete="off" value="XL">
                        XL
                    </label>
                </div>
                <h6 class="card-text mt-2">$${detalle.price}</h6>
            `

        button.innerHTML = `
                <button type="button" class="btn btn-outline-success" onclick="Agregar(${detalle.id})">Añadir al Carrito</button>
            `
    }
}

function Agregar(id) {
    fetch(`https://fakestoreemma.onrender.com/products/${id}`)
        .then(res => res.json())
        .then(json => InfoCarrito(json))

    function InfoCarrito(articulos) {
        const mostrar = document.querySelector('#mostrar');
        const fotter = document.querySelector('#pagar')

        mostrar.innerHTML += `
                <div class="card border-0 ms-4" style="width: 20rem;">
                    <img src="${articulos.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${articulos.title}</h5>
                        <p class="card-text">$${articulos.price}</p>
                    </div>
                </div>
            `

        fotter.innerHTML = `
                <div class="d-inline-flex">
                    <h3 class="mt-1">Total:<h3>
                    <button class="btn btn-outline-success">Pagar</button>
                </div>
            `
    }
}