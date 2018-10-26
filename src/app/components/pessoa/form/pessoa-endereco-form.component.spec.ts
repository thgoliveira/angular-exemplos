import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaEnderecoFormComponent } from './pessoa-endereco-form.component';

describe('PessoaEnderecoFormComponent', () => {
  let component: PessoaEnderecoFormComponent;
  let fixture: ComponentFixture<PessoaEnderecoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaEnderecoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaEnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
