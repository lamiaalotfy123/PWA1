import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ObsComponent } from './components/obs/obs.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { Routes } from '@angular/router';
import { UserTemplateComponent } from './components/user-template/user-template.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserAuth2Component } from './components/user-auth2/user-auth2.component';
import { userAuth2Guard } from '../guards/user-auth2.guard';
import { RaectiveFormComponent } from './components/raective-form/raective-form.component';

export const routes: Routes = [
  /* defult path */
  // 1
  // {"path":'',component:ProductsListComponent},
  // 2
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: ProductsParentComponent, title: 'Home page' },
  { path: 'Products', component: ProductsListComponent, title: 'Products',canActivate:[userAuth2Guard] },
  /* not found page 404 wildcard path */
  {
    path: 'ProductDetails/:id',
    component: ProductsDetailsComponent,
    title: 'Product Details',
  },
  { path: 'observer', component: ObsComponent, title: 'observable' },
  {
    path: 'usertemplatedrivenform',
    component: UserTemplateComponent,
    title: 'userTemplate',
  },
   {
    path: 'userraectiveform',
    component: RaectiveFormComponent,
    title: 'userReactiveForm',
  },
  {
    path: 'Admin',
    component: AddProductComponent,
    title: 'Admin',
  },
  {
    path: 'Admin/:id',
    component: AddProductComponent,
    title: 'Admin',
  },
  {
    path: 'UserLogin',
    component:UserAuth2Component,
    title: 'user auth',
  },
   {
    path: 'UserLogout',
    component:UserAuth2Component,
    title: 'user auth',
  },


  { path: '**', component: NotFoundPageComponent, title: 'not found page' },
];
