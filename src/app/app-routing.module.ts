import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SearchComponent } from './components/search/search.component';
import { DetailPComponent } from './components/detail-p/detail-p.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'forgotp', component: ForgotpassComponent},
  {path: 'profile', component: PerfilComponent},
  {path: 'search', component: SearchComponent},
  {path: 'detallesP/:id/:nombre', component: DetailPComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
