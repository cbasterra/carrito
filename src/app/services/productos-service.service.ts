import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/interfaces/productos'; // Asegúrate de que esta interfaz esté correctamente definida.

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  private apiUrl = 'https://675739aec0a427baf94c2614.mockapi.io/api/remeras';

  constructor(private http: HttpClient) {}

  // Método para obtener los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
