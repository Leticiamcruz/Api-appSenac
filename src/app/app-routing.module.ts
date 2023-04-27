import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
    },
  {
    path:'agendamento',
    component:AgendamentoComponent
  },
  {
    path:'agendamento/:id',
    component:AgendamentoComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
