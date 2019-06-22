import { TestBed } from '@angular/core/testing';

import { DbmovieService } from './dbmovie.service';

describe('DbmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbmovieService = TestBed.get(DbmovieService);
    expect(service).toBeTruthy();
  });
});
