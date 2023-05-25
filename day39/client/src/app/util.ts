import { inject } from "@angular/core";
import { CanActivateFn, CanDeactivateFn, Router } from "@angular/router";
import { CartService } from "./cart.service";
import { CartComponent } from "./components/cart.component";

export interface LeaveComponent {
  canExit(): boolean
  getMessage(): string
}

export const loginGuard: CanActivateFn = (route, state) => {
  const cartSvc = inject(CartService)
  const router = inject(Router)

  if (cartSvc.hasLogin())
    return true

  return router.createUrlTree(['/'])
}

export const leaveComp: CanDeactivateFn<LeaveComponent> = (comp, currRoute, currState, nextState) => {
  if (comp.canExit())
    return true

  return confirm(comp.getMessage())
}
