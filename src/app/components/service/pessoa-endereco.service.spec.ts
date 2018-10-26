import { TestBed } from '@angular/core/testing';

import { PessoaEnderecoService } from './pessoa-endereco.service';

describe('PessoaEnderecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaEnderecoService = TestBed.get(PessoaEnderecoService);
    expect(service).toBeTruthy();
  });
});
