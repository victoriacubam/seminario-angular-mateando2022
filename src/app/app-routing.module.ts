import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateandoAboutComponent } from './mateando-about/mateando-about.component';
import { MateandoProductsInfoComponent } from './mateando-products-info/mateando-products-info.component';
import { MateandoProductsComponent} from './mateando-products/mateando-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: MateandoProductsComponent
  },
  {
    path: 'information',
    component: MateandoProductsInfoComponent
  },
  {
    path: 'about',
    component: MateandoAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
