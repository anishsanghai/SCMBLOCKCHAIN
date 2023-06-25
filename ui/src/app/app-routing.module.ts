import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManufacturerComponent } from './pages/M/manufacturer/manufacturer.component';
import { DistributorComponent } from './pages/D/distributor/distributor.component';
import { SellerComponent } from './pages/S/seller/seller.component';
import { AuthGuard } from './services/auth.guard';
import { CreateComponent } from './pages/M/create/create.component';
import { ViewComponent } from './pages/M/view/view.component';
import { ViewingpageComponent } from './viewingpage/viewingpage.component';
import { UpdateComponent } from './pages/S/update/update.component';
import { UpadateComponent } from './pages/D/upadate/upadate.component';
import { UpdateDComponent } from './pages/D/update-d/update-d.component';
import { UpadateSComponent } from './pages/S/upadate-s/upadate-s.component';
 


const routes: Routes = [
  {path :'',component:LoginComponent},
  {path:'manufacturer',component:ManufacturerComponent},
  {path:'distributor',component:DistributorComponent},
  {path:'seller',component:SellerComponent},
  {path:'createM',component:CreateComponent},
  {path:'View',component:ViewComponent},
  {path:'ViewPage',component:ViewingpageComponent},
  {path:'update',component:UpdateComponent},
  {path:'upadate',component:UpadateComponent},
  {path:'updateD',component:UpdateDComponent},
  {path:'updateS',component:UpadateSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
