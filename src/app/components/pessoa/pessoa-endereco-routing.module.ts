import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaEnderecoFormComponent } from './form/pessoa-endereco-form.component';
import { PessoaEnderecoListComponent } from './list/pessoa-endereco-list.component';

const routes: Routes = [
  { path: 'inserir', component: PessoaEnderecoFormComponent },
  { path: '', component: PessoaEnderecoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaEnderecoRoutingModule { }
