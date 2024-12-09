import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'categorias', component: CategoriesComponent},
  {path: 'productos/remeras', component: ProductsComponent, data: {category: 'remeras'}},
  {path: 'productos/buzos', component: ProductsComponent, data: {category: 'buzos'}},
  {path: 'productos/jeans', component: ProductsComponent, data: {category: 'jeans'}},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
