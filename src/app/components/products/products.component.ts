import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import { Producto } from 'src/interfaces/productos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string | undefined;
  productos: Producto[] = [];

  constructor(private route: ActivatedRoute, private productosService: ProductosServiceService) {}

  ngOnInit(): void {
    // Acceder a la información de 'data' en la ruta
    this.route.data.subscribe((data) => {
      this.category = data['category']; // Extraer el valor de 'category'
      console.log('Categoría:', this.category);
    });

    // Llamar al servicio para obtener los productos
    this.productosService.getProductos().subscribe((productos) => {
      this.productos = productos;
      console.log('Productos:', this.productos);
    });

  }
}
