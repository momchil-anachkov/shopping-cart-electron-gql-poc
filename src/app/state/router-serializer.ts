import { RouterStateSerializer } from '@ngrx/router-store/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { RouterSliceState } from './router-slice-state.type';

export class CustomSerializer implements RouterStateSerializer<RouterSliceState> {
  serialize(routerState: RouterStateSnapshot): RouterSliceState {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {
      url: url,
      params: {...params},
      queryParams: {...queryParams},
    };
  }
}
