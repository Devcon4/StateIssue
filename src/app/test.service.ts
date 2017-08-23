import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  projects = {
    read: () => null, // data call
    // If you comment out this function then state will show up.
    delete: () => null, // data call
  };

}
