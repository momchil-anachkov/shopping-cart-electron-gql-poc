import { NgModule } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgrxCache } from 'apollo-angular-cache-ngrx';
import { NotificationService } from './providers/notification.service';
import { ApolloClientOptions } from 'apollo-client';
import { AppConfig } from '../../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/plain/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [],
  providers: [

    ElectronService,

    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink, ngrxCache: NgrxCache): ApolloClientOptions<any> => {
        return {
          // cache: new InMemoryCache(),
          cache: ngrxCache.create(),
          link: httpLink.create({
            uri: 'http://localhost:4000/graphql'
          }),
          connectToDevTools: AppConfig.production ? false : true,
          // link: new ApolloLink((operation, forward) => {
          //   console.log('from middleware', operation);
          //   return forward(operation).map((result) => {
          //     console.log('from afterware', result);
          //     return result;
          //   });
          // }).concat(httpLink
          //   .create({
          //     uri: 'http://localhost:4000/graphql'
          //   })
          // )
          // )
        };
      },
      deps: [HttpLink, NgrxCache]
    }
  ]
})
export class CoreModule {
  constructor(
    private notificationService: NotificationService,
  ) {
    console.log(this.notificationService);
  }
}
