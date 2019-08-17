import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate;
}
@Injectable({
  providedIn: 'root'
})
export class FormDitchGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
