import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { PessoaslistaComponent } from './components/pessoas/pessoaslista/pessoaslista.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {
    path:'admin', component:IndexComponent,children:[
      {path:'pessoas', component:PessoaslistaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
