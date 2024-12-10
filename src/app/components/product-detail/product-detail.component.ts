import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import { Producto } from 'src/interfaces/productos';
import { Cart } from 'src/interfaces/cart';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private productosService: ProductosServiceService, private carritoService:CarritoService, private route: ActivatedRoute) {}

  carrito = {
    id: 0,
    idProducto: 0,
    talle: 'M'
  }
  talle: string = 'M';
  productos: Producto[] = [];
  producto: Producto = {
    id: 0,
    title: '',
    price: 0,
    imagen: 'noimage.jpg',
    categoria: 'remeras',
  };
  idproducto: string = '';

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((productos) => {
      this.producto = productos.find(producto => producto.id == this.route.snapshot.params['idproducto']) || this.producto;
    });
  }

  seleccionarTalle(talle: string) {
    this.talle = talle;
  }

  agregarCarrito() {
    this.carrito.idProducto = this.producto.id;
    this.carrito.talle = this.talle;
    this.carritoService.agregarCarrito(this.carrito, this.talle).subscribe((carrito) => {
      console.log(carrito);
    });
  }
}
