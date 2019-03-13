import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { KeysPipe } from './pipes/keys.pipe';
import { ValuesPipe } from './pipes/values.pipe';
import { EntriesPipe } from './pipes/entries.pipe';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { MaterialModule } from '../lib/material.module';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { WebviewDirective } from './directives/webview.directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
  ],
  declarations: [
    WebviewDirective,
    KeysPipe,
    ValuesPipe,
    EntriesPipe,
    ActionBarComponent,
    SubscriberComponent,
  ],
  exports: [
    WebviewDirective,
    KeysPipe,
    ValuesPipe,
    EntriesPipe,
    ActionBarComponent,
  ]
})
export class SharedModule { }
