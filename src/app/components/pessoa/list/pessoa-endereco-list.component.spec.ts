import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaEnderecoListComponent } from './pessoa-endereco-list.component';

describe('PessoaEnderecoListComponent', () => {
  let component: PessoaEnderecoListComponent;
  let fixture: ComponentFixture<PessoaEnderecoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaEnderecoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaEnderecoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
