import { Component, OnInit } from '@angular/core';
import { Agendamento, NovoAgendamento } from '../models/agendamento.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formList :NovoAgendamento []=[];

}
