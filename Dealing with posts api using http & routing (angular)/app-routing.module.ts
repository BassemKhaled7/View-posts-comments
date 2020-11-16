import { AyhgaComponent } from './ayhga/ayhga.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path:'home'  , component: HomeComponent },
{ path:'products'  , component: ProductsComponent },
{ path:'users'  , component: UsersComponent },
{ path:'user/:id/:name'  , component: UserComponent },
{ path:'servers'  , component: ServersComponent },
{ path:'ayhga/:id/edit'  , component: AyhgaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
