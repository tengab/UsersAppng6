import { TestBed } from '@angular/core/testing';

import { UserBuilderService } from './user-builder.service';

describe('UserBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBuilderService = TestBed.get(UserBuilderService);
    expect(service).toBeTruthy();
  });
});
