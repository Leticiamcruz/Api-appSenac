import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { AgendamentoService } from "../service/agendamento.service";
import { AgendamentoComponent } from "./agendamento/agendamento.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { trackRoutingModule } from "./track.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const routes: Routes =[{path:'', component:HomeComponent}]


@NgModule({
    declarations:[],
    imports:[trackRoutingModule,
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule,
        ReactiveFormsModule],
    exports:[RouterModule],
    providers: [AgendamentoService]
})

export class trackModule{}