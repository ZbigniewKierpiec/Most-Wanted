import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CrimeInfoComponent } from './crime-info/crime-info.component';
import { CrimeCardComponent } from './crime-card/crime-card.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, HomeComponent, AdminComponent, CrimeInfoComponent, CrimeCardComponent],
  imports: [BrowserModule , FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
