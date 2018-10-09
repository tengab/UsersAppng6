import { TestBed } from '@angular/core/testing';

import { NationalFriendsService } from './national-friends.service';

describe('NationalFriendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NationalFriendsService = TestBed.get(NationalFriendsService);
    expect(service).toBeTruthy();
  });
});
