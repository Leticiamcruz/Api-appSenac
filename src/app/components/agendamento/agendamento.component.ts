import { Component, Input, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/service/agendamento.service';
import { Agendamento, NovoAgendamento } from '../models/agendamento.models';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  
  @Input() agendamentoList: Agendamento[] = [];
  @Input() formList: NovoAgendamento[] = [];
  editAgendaId!: number
  editNovo!: Agendamento
  editAgendamento!: Agendamento[]

  agendaForm: any = this.fb.group({
    data: [' ', Validators.required],
    especialidade: [' ', Validators.required],
    local: [' ', Validators.required],
    hora: [' ', Validators.required]
  })


  constructor(private service: AgendamentoService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.agendaForm !== null;

    this.service.getNovoAgendamento().subscribe(list => {
      return this.formList = list
    })

    console.log(this.formList)
  }

  clear() {
    this.agendaForm = this.fb.group({
      data: '',
      especialidade: '',
      local: '',
      hora: '',
    })
  }


  AddAgendamento(agendaFormsValue: any) {
    const Novoagendamentos: NovoAgendamento = agendaFormsValue;
    const id = this.editAgendaId;
    console.log(agendaFormsValue)
    const indice = this.formList.findIndex(item => id === item.id)

    if (id) {
      this.service.edit(id, Novoagendamentos).subscribe(item => this.formList[indice] = item)
    } else
      this.service.addAgenda(this.agendaForm.value).subscribe(response => {
        this.formList.push(response)
      })
    this.clear();
   
  }

  editAgendaForms(agendaId: number, agendamento: Agendamento) {
    let change = this.formList.find((agendamento) => agendamento.id === agendaId)

    this.editAgendaId = agendamento.id;
    

    this.agendaForm.setValue({
      data: change?.data,
      especialidade: change?.especialidade,
      local: change?.local,
      hora: change?.hora
    })

  }

  remove(agendaId: number) {
    this.service.remove(agendaId).subscribe(response => {
      this.agendamentoList = this.agendamentoList.filter(agendamento => agendamento.id !== agendaId)
    })
  }
}