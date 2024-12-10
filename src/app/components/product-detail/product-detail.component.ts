import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import { Producto } from 'src/interfaces/productos';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private productosService: ProductosServiceService, private route: ActivatedRoute) {}

  productos: Producto[] = [];
  producto: Producto = {
    id: 0,
    title: '',
    price: 0,
    imagen: '',
    categoria: '',
  };
  idproducto: string = '';

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((productos) => {
      this.producto = productos.find(producto => producto.id == this.route.snapshot.params['idproducto']) || this.producto;
    });
  }

}
