import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/interfaces/cart';
import { Producto } from 'src/interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'https://675739aec0a427baf94c2614.mockapi.io/api/cart';

  private carrito: Cart = {
    id: 0,
    idProducto: 0,
    talle: ''
  }

  constructor(private http: HttpClient) { }

  getCarrito(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl);
  }

  agregarCarrito(carrito: Cart, talle: string): Observable<Cart> {
    this.carrito.idProducto = carrito.idProducto;
    this.carrito.talle = talle;
    return this.http.post<Cart>(this.apiUrl, this.carrito);
  }

  borrarCarrito(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/${id}`);
  }
}
