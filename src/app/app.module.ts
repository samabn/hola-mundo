import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';//IMPORTAMOS EL COMPONENTE HEADER

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent//ESTAMOS INDICANDO QUE TENEMOS EL COMPONENTE HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
