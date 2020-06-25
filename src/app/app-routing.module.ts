import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ProductComponent} from "./product/product.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";




const routes: Routes = [
  { path: '',  component: HomeComponent  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'products/:id/edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
