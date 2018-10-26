import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaEnderecoService {

  apiUrl = "http://localhost:8080/pessoa";

  constructor( private http: HttpClient ) { }
    
    buscarPessoas(){
      return this.http.get<Pessoa[]>(`${this.apiUrl}`)
    }
  
}
