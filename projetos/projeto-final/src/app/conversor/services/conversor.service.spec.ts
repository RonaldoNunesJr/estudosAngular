import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConversorService
    ],
    imports: [
      HttpModule
    ]
  }));

  it('should be created', () => {
    const service: ConversorService = TestBed.get(ConversorService);
    expect(service).toBeTruthy();
  });
});
