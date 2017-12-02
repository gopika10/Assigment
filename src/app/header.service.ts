import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
  onProjectPage = new Subject();
  constructor() { }

}
