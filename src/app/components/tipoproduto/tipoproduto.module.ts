import { NgModule } from '@angular/core';
import { TipoProdutoRoutingModule } from './tipo-produto-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    TipoProdutoRoutingModule
  ],
  declarations: [FormComponent, ListComponent]
})
export class TipoprodutoModule { }
