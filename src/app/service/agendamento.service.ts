import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Agendamento, NovoAgendamento } from '../components/models/agendamento.models';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private baseUrl= 'http://localhost:3000'
  
  constructor(private http:HttpClient) { }

  getAgendamento(): Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(`${this.baseUrl}/agendamento`)
  }
  getNovoAgendamento(): Observable<NovoAgendamento[]>{
    return this.http.get<NovoAgendamento[]>(`${this.baseUrl}/agendamento`)
  }


  addAgenda(agendamento:NovoAgendamento):Observable<NovoAgendamento>{
    return this.http.post<NovoAgendamento>(`${this.baseUrl}/agendamento`,agendamento)
  }

  edit(agendaId: number,agendamento:Agendamento){
    return this.http.put<Agendamento>(`${this.baseUrl}/agendamento/${agendaId}`,agendamento)
  }


  remove(agendaId:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/agendamento/${agendaId}`)
  }
}
