var productos=[];

let nombre1=document.getElementById('nombre').value;
precio_unitario1=document.getElementById("precio_unitario");
cantidad1=document.getElementById("cantidad");

let producto = {
  nombre: "",
  precio_unitario: 0,
  cantidad: 0,
  totalCostoProducto : ()=> {
    precio=producto.precio_unitario;
    cant=producto.cantidad;
    console.log('estoy calculando...');
    totalIndividual=precio*cant;
    subtotal+=totalIndividual;
}
};
function AñadirProducto() {
  console.log("name "+nombre1);
  producto.nombre=nombre1;
  producto.precio_unitario=precio_unitario1;
  producto.cantidad=cantidad1;
  productos.push(producto);
  console.log(productos);
}
function TotalProductos() {
  
  producto.nombre=nombre1;
  producto.precio_unitario=precio_unitario1;
  producto.cantidad=cantidad1;
  productos.push(producto);
  console.log(productos);
}
var productoCerrar={
  productos:0,
  subtotal:0,
  total:0,
  folio:""
}

var folio= Math.random().toString(36).substring(0,8);
productoCerrar.folio=folio;