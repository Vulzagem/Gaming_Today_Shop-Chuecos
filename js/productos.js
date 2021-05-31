//Storage

let carrito = []
const checkStorage = () => {
  if (localStorage.getItem("carrito") !== null) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
  }
}
checkStorage()

//Productos

const games = [{ id: 1, nombre: "CoD Coldwar", imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/caratula-call-duty-black-ops-cold-war-2038143.png?itok=ywpD9uGS", precio: 59 },
{ id: 2, nombre: "Monster Hunter: World", imagen: "https://i.3djuegos.com/juegos/14998/monster_hunter_world/fotos/ficha/monster_hunter_world-3758225.jpg", precio: 20 },
{ id: 3, nombre: "Mortal Kombat 11", imagen: "https://static.wikia.nocookie.net/inmortalkombat/images/e/ea/Mk_cover.png/revision/latest?cb=20190110192227&path-prefix=es", precio: 40 },
{ id: 4, nombre: "Nier: Automata", imagen: "https://i0.wp.com/www.thedigitalquestioner.com/wp-content/uploads/2019/11/MV5BYzcxMmE2NjItNDc0ZS00NmY3LTk0ZDAtZGJmMDBmMzYyZDczXkEyXkFqcGdeQXVyMzM2MzI5MzU@._V1_SY1000_CR007091000_AL_.jpg?resize=532%2C750&ssl=1", precio: 40 },
{ id: 5, nombre: "Bloodborne", imagen:"https://static-cdn.jtvnw.net/ttv-boxart/Bloodborne.jpg", precio: 20 },
{ id: 6, nombre: "Tekken 7", imagen:"https://image.api.playstation.com/cdn/UP0700/CUSA05972_00/4yfeeKKfJdD5WzDQsoiM3xrcqPlpDLm7.png", precio: 39},
{ id: 7, nombre: "Nier Replicant", imagen:"https://www.fantasymundo.com/wp-content/uploads/2021/02/NieR-Replicant.jpg", precio: 59},
{ id: 8, nombre: "The Last Of Us: Part 2", imagen:"https://as01.epimg.net/meristation/imagenes/2019/09/25/game_cover/183891271569432001.jpg", precio: 49},
{ id: 9, nombre: "Spiderman: Miles Morales", imagen:"https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png", precio: 59}];

//Cards para el html

let acumulador = ""
games.forEach((game, index) => {
  let num = (index % 3) + 1
  acumulador = `<div class="productos" id="carrito${game.nombre}">
                  <div class="box effect${num}">
                  <span></span>
                      <div class="content">
                        <h5 class="card-title"> ${game.nombre} </h5>
                        <h6 class="card-subtitle mb-2"> U$ ${game.precio} </h6>
                        <img src="${game.imagen}">
                        <a href="#" id="agregar${game.id}"> Agregar </a>
                      </div>
                  </div>
                </div>`
  $("#contenido").append(acumulador)
  $(`#agregar${game.id}`).click(function () {
    agregarAlCarrito(game.id)
  })
})

function Carrito(id, nombre, imagen, precio, cantidad) {
  this.id = id,
    this.nombre = nombre,
    this.imagen = imagen,
    this.precio = precio,
    this.cantidad = cantidad
}

//Funcion para agregar al carrito con modal

const agregarAlCarrito = (id) => {

  let seleccion = games.find(game => game.id === id)
  $("#exampleModalLabel").text("Gracias por su compra")
  $("#modalBody").text(`Compraste un ${seleccion.nombre}`)



  modalCompra.show();
  checkStorage();
  let buscarEnCarrito = carrito.find(game => game.id == seleccion.id)
  if (buscarEnCarrito) {
    console.log(carrito)
    let indice = carrito.indexOf(buscarEnCarrito)
    carrito[indice].cantidad += 1
  } else {
    let itemAgregado = new Carrito(seleccion.id, seleccion.nombre, seleccion.imagen, seleccion.precio, 1)
    carrito.push(itemAgregado)
  }
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Modal en el carrito

function cargarCarrito() {
  if (carrito.length === 0) {
    $("#carritoEnModal").html(`<p>No hay elementos para mostrar</p>`)
  } else {
    acumulador = ""
    carrito.forEach((game) => {

      acumulador += `<div class="container productos" id="carrito${game.nombre}">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${game.nombre}  </h5>
          <h6 class="card-subtitle mb-2 text-muted"> U$ ${game.precio} </h6>
          <img src="${game.imagen}">
          <p class="card-text"> ${game.cantidad} </p>
          <a href="#" id="quitar${game.id}" onclick="removerItemCarrito(${game.id})" class="card-link"> Eliminar </a>
          </div>
        </div>
        </div>`

      $("#carritoEnModal").html(acumulador)

    })
  }
}

//Eliminar items del carrito

function removerItemCarrito(id) {
  console.log(id)
  let nuevoCarrito = []
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id !== id) {
      nuevoCarrito.push(carrito[i])
    }
  }
  console.log(carrito)
  console.log(nuevoCarrito)
  carrito = nuevoCarrito
  localStorage.setItem("carrito", JSON.stringify(carrito))
  cargarCarrito()
}

const modalCompra = new bootstrap.Modal(document.getElementById('modalProductoOk'))
const modalCarrito = new bootstrap.Modal(document.getElementById('carritoModal'))

$("#carritoModal").click(() => {
  cargarCarrito()
  modalCarrito.show()
})
