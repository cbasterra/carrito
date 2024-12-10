import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosServiceService } from 'src/app/services/productos-service.service';

interface ItemCarrito {
  nombre: string;
  talle: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carrito: ItemCarrito[] = []; // Define el tipo del array
  
  allProductos: any[] = [];
  productos: any[] = [];
  total: number = 0;

  constructor(
    private carritoService: CarritoService, 
    private productosService: ProductosServiceService
  ) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data) => {
      this.allProductos = data; // Cargar todos los productos
      
      this.carritoService.getCarrito().subscribe((data) => {
        this.productos = data; // Cargar productos del carrito
        
        this.productos.forEach((item: any) => {
          const productoEncontrado = this.allProductos.find((producto: any) => producto.id === item.idProducto);
          
          if (productoEncontrado) {
            this.carrito.push({
              nombre: productoEncontrado.title,
              talle: item.talle,
              precio: productoEncontrado.price,
              imagen: 'assets/' + productoEncontrado.categoria + '/' + productoEncontrado.imagen
            });
          } else {
            console.warn(`Producto con id ${item.idProducto} no encontrado.`);
          }
        });
        
        console.log('Carrito:', this.carrito);
        this.calcularTotal();
      });
    });
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }
}
