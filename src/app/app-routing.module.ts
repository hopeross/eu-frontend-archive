import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbarnComponent } from './components/addbarn/addbarn.component';
import { BarnComponent } from './components/barn/barn.component';

const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  {path: 'barn', component: BarnComponent},
  {path: 'addbarn', component: AddbarnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
