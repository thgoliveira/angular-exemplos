import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { Endereco } from '../../model/endereco';
import { PessoaEnderecoService } from '../../service/pessoa-endereco.service';

@Component({
  selector: 'app-pessoa-endereco-list',
  templateUrl: './pessoa-endereco-list.component.html',
  styleUrls: ['./pessoa-endereco-list.component.css']
})
export class PessoaEnderecoListComponent implements OnInit {

  pessoa: Pessoa;
  endereco: Endereco;
  pessoas: Array<any>;
  texto: string;  

  constructor(private ps: PessoaEnderecoService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.endereco = new Endereco();
    this.pessoas = new Array();
    this.buscarTodos();
    console.log(this.buscarTodos);
  }
  
  buscarTodos(){
    this.ps.buscarPessoas().subscribe(dados => this.pessoas = dados);
  }

}
