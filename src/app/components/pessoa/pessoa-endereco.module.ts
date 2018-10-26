import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaEnderecoRoutingModule } from './pessoa-endereco-routing.module';
import { PessoaEnderecoFormComponent } from './form/pessoa-endereco-form.component';
import { PessoaEnderecoListComponent } from './list/pessoa-endereco-list.component';

@NgModule({
  imports: [
    CommonModule,
    PessoaEnderecoRoutingModule
  ],
  declarations: [PessoaEnderecoFormComponent, PessoaEnderecoListComponent]
})
export class PessoaEnderecoModule { }
