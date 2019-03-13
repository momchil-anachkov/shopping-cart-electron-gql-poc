import { RouterReducerState } from '@ngrx/router-store';
import { RouterSliceState } from './router-slice-state.type';
import { ShoppingState } from '../feature/shopping/store';

export interface AppState {
  router: RouterReducerState<RouterSliceState>;
  shopping: ShoppingState;
  apollo: any;
}
