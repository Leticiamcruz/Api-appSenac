import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgendamentoService } from 'src/app/service/agendamento.service';
import { Agendamento, NovoAgendamento } from '../models/agendamento.models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() formList: NovoAgendamento[] = [];

  @Input() agendamentoList: Agendamento[] = [];

  editAgendamento!:Agendamento[]

  editAgendaId!:number
  
  constructor(private service: AgendamentoService) { }

  ngOnInit(): void {

  
    console.log(this.get())
  }
  
  get() {
    this.service.getAgendamento().subscribe(response => {
     return  this.agendamentoList = response
    })
    
  }

}


