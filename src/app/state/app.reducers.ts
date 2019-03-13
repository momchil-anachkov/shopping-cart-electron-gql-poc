import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppConfig } from '../../environments/environment';
import { AppState } from './app.state';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreKeyNames } from '../config';
import { shoppingReducer } from '../feature/shopping/store';
import { apolloReducer } from 'apollo-angular-cache-ngrx';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  shopping: shoppingReducer,
  apollo: apolloReducer,
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: [
      // StoreKeyNames.SHOPPING,
      {
        [StoreKeyNames.SHOPPING]: {
          // reviver: shoppingReviver
        }
      }
    ],
    // rehydrate: true,
  })(reducer);
}

export const appMetaReducers: MetaReducer<AppState>[] = !AppConfig.production ?
  [
    logger,
    storeFreeze,
    localStorageSyncReducer,
  ]
  :
  [
    localStorageSyncReducer,
  ];

