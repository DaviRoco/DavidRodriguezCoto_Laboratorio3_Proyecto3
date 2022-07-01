import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgregarComponenteComponent} from "./componentes/agregar-componente/agregar-componente.component";
import {DetalleComponenteComponent} from "./componentes/detalle-componente/detalle-componente.component";
import {ListarComponentesComponent} from "./componentes/listar-componentes/listar-componentes.component";

const routes: Routes = [
  {path: 'agregar', component:AgregarComponenteComponent},
  {path: 'componentes/:id', component:DetalleComponenteComponent},
  {path: 'componentes', component:ListarComponentesComponent},
  { path: '',redirectTo:'productos', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
