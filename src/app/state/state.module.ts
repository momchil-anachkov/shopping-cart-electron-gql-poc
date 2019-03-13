import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer, } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { EffectsModule } from '@ngrx/effects';
import { AppConfig } from '../../environments/environment';
import { AppEffects } from './app.effects';
import { appReducer, appMetaReducers } from './app.reducers';
import { CustomSerializer } from './router-serializer';
import { StoreKeyNames } from '../config';
import { ShoppingEffects } from '../feature/shopping/store/shopping.effects';
import {
  NgrxCacheModule,
  NgrxCache,
} from 'apollo-angular-cache-ngrx';

@NgModule({
  imports: [
    StoreModule.forRoot(
      appReducer,
      {
        metaReducers: appMetaReducers,
      },
    ),
    EffectsModule.forRoot([
      AppEffects,
      ShoppingEffects,
    ]),

    StoreRouterConnectingModule.forRoot({
      stateKey: StoreKeyNames.ROUTER,
    }),
    NgrxCacheModule,
    AppConfig.production ? [] : StoreDevtoolsModule.instrument()
  ],
})
export class StateModule {
  constructor(
    ngrxCache: NgrxCache,

    @Optional()
    @SkipSelf()
    stateModule?: StateModule,
  ) {
    if (stateModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only!');
    }
    const cache = ngrxCache.create({});
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomSerializer
        },
      ]
    };
  }
}
