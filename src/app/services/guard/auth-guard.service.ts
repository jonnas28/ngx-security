import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor() { }
  canActivate(): Observable<boolean> {
    return of(true);
  }
}
