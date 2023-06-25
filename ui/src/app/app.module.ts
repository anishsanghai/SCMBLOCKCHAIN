import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ManufacturerComponent } from './pages/M/manufacturer/manufacturer.component';
import { DistributorComponent } from './pages/D/distributor/distributor.component';
import { SellerComponent } from './pages/S/seller/seller.component';
import { CreateComponent } from './pages/M/create/create.component';
import { ViewComponent } from './pages/M/view/view.component';
import { ViewingpageComponent } from './viewingpage/viewingpage.component';
import { UpadateSComponent } from './pages/S/upadate-s/upadate-s.component';
import { UpdateDComponent } from './pages/D/update-d/update-d.component';
import { UpdateComponent } from './pages/S/update/update.component';
import { UpadateComponent } from './pages/D/upadate/upadate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ManufacturerComponent,
    DistributorComponent,
    SellerComponent,
    CreateComponent,
    ViewComponent,
    UpdateComponent,
    ViewingpageComponent,
    UpadateSComponent,
    UpdateDComponent,
    UpadateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
