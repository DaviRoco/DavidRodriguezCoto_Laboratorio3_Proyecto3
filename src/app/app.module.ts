import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponenteComponent } from './componentes/agregar-componente/agregar-componente.component';
import { ListarComponentesComponent } from './componentes/listar-componentes/listar-componentes.component';
import { DetalleComponenteComponent } from './componentes/detalle-componente/detalle-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponenteComponent,
    ListarComponentesComponent,
    DetalleComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
