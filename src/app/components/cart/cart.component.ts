import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carrito = [
    { nombre: 'Buzo 1', talle: 'M', precio: 65.00, imagen: 'assets/buzo1.png' },
    { nombre: 'Buzo 3', talle: 'L', precio: 55.00, imagen: 'assets/buzo3.png' },
    { nombre: 'Jean 4', talle: 'S', precio: 40.00, imagen: 'assets/jean4.jpg' }
  ];

  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }
}
