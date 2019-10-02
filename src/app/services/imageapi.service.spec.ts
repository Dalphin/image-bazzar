import { TestBed, inject } from '@angular/core/testing';

import { ImageapiService } from './imageapi.service';

describe('ImageapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageapiService]
    });
  });

  it('should ...', inject([ImageapiService], (service: ImageapiService) => {
    expect(service).toBeTruthy();
  }));
});
