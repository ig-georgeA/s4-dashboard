import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public revealServerUri: string = 'http://localhost:5111';
}
