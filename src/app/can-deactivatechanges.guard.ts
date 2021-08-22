import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoansComponent } from './loans/loans.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatechangesGuard implements CanDeactivate<LoansComponent> {
  canDeactivate(
    component: LoansComponent) {

    return  window.confirm("are you sure");
  }

}
