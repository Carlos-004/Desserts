import "../sass/style.scss"

const productos = [
    {
      img: "../img/image-waffle-tablet.jpg",
      nombre: "Waffle with Berries",
      subNombre: "Waffle",
      precio: 6.50,
      id:0
    },
    {
      img: "../img/image-creme-brulee-tablet.jpg",
      nombre: "Vanilla Bean Crème Brûlée",
      subNombre: "Crème Brûlée",
      precio: 7.00,
      id:1
    },
    {
      img: "../img/image-macaron-tablet.jpg",
      nombre: "Macaron Mix of Five",
      subNombre: "Macaron",
      precio: 8.00,
      id:2
    },
    {
      img: "../img/image-tiramisu-tablet.jpg",
      nombre: "Classic Tiramisu",
      subNombre: "Tiramisu",
      precio: 5.50,
      id:3
    },
    {
      img: "../img/image-baklava-tablet.jpg",
      nombre: "Pistachio Baklava",
      subNombre: "Baklava",
      precio: 4.00,
      id:4
    },
    {
      img: "../img/image-meringue-tablet.jpg",
      nombre: "Lemon Meringue Pie",
      subNombre: "Pie",
      precio: 5.00,
      id:5
    },
    {
      img: "../img/image-cake-tablet.jpg",
      nombre: "Red Velvet Cake",
      subNombre: "Cake",
      precio: 4.50,
      id:6
    },
    {
      img: "../img/image-brownie-tablet.jpg",
      nombre: "Salted Caramel Brownie",
      subNombre: "Brownie",
      precio: 5.50,
      id:7
    },
    {
      img: "../img/image-panna-cotta-tablet.jpg",
      nombre: "Vanilla Panna Cotta",
      subNombre: "Panna Cotta",
      precio: 6.50,
      id:8
    }
];
  
const cardContainer = document.querySelector(".card__grid");
const aside = document.querySelector(".aside")
const asideCard = document.querySelector(".aside__card");

function productoDesserts(productosFiltrados){

    productosFiltrados.forEach(producto =>{
        const divProduct = document.createElement("div");
        divProduct.classList.add("product");

        const containerImg = document.createElement("picture");
        containerImg.classList.add("prod__container");

        const dessertsImg = document.createElement("img");
        dessertsImg.setAttribute("src",`${producto.img}`);
        dessertsImg.setAttribute("alt",`${producto.nombre}`);
        dessertsImg.classList.add("product__img")
        containerImg.append(dessertsImg);

        const boton = document.createElement("button");
        boton.classList.add("product__btn");
        const imgBoton = document.createElement("img");
        imgBoton.setAttribute("src","../img/icon-add-to-cart.svg");
        imgBoton.classList.add("btn__img")
        boton.append(imgBoton)
        boton.innerText = "Add to Cart";
        boton.addEventListener("click",() => agregarCard(producto.id))
        containerImg.append(boton);

        const productInfo = document.createElement("ul");
        productInfo.classList.add("product__info");

        const nombre = document.createElement("li");
        nombre.classList.add("product__nombre","margen");
        nombre.innerText = `${producto.subNombre}`
        productInfo.append(nombre);


        const nombreMenu = document.createElement("li");
        nombreMenu.classList.add("product__name-menu","margen");
        nombreMenu.innerText = `${producto.nombre}`
        productInfo.append(nombreMenu);

        const precioProduct = document.createElement("li");
        precioProduct.classList.add("product__precio");
        precioProduct.innerText = `$${producto.precio.toFixed(2)}`;
        productInfo.append(precioProduct);

        divProduct.append(containerImg);
        divProduct.append(productInfo)
        cardContainer.append(divProduct)
    });
   
}
function confirmarOrden(){
  const boton = document.createElement("button");
  boton.classList.add("orden")
  boton.innerText = "Confirm Order";
  aside.append(boton)
}
function agregarCard(ID){
  const cardProduct = productos.find(index => index.id === ID);

  const asideContainer = document.createElement("div");
  asideContainer.classList.add("aside__container");

  const asideProducto = document.createElement("div");
  asideProducto.classList.add("aside__producto");

  const nombreProducto = document.createElement("h3");
  nombreProducto.classList.add("aside__nombre");
  nombreProducto.innerText = `${cardProduct.nombre}`;
  asideProducto.append(nombreProducto);

  const asideInfo = document.createElement("div");
  asideInfo.classList.add("aside__info");
  asideProducto.append(asideInfo);

  // const conteo = document.createElement("p");
  // conteo.classList.add("conteo");
  // conteo.innerText = "1x";
  // asideInfo.append(conteo);

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerText = `$${cardProduct.precio.toFixed(2)}`;
  asideInfo.append(precio);

  const close = document.createElement("div");
  close.classList.add("close");

  const imgClose = document.createElement("img");
  imgClose.setAttribute("src","../img/icon-remove-item.svg");
  imgClose.classList.add("close__img");
  imgClose.addEventListener("click",() => deleteProduct(cardProduct.id));
  close.append(imgClose)


  asideContainer.append(asideProducto);
  asideContainer.append(close)
  asideCard.append(asideContainer);

  function deleteProduct(){
  
    if (asideContainer) {
      asideCard.removeChild(asideContainer)
    }
  }

}

confirmarOrden()
productoDesserts(productos)