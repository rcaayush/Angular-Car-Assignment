import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BookFormComponent } from './book-form/book-form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModelCarsComponent } from './model-cars/model-cars.component';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  {
    path:"",pathMatch:"full",component:HomePageComponent
  },
  {path:'home',component:HomePageComponent},
  {path:'model',component:ProductPageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'book',component:BookFormComponent},
  {path:'cars',component:ModelCarsComponent},
  {path:'**',pathMatch:"full",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
