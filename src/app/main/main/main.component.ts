import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectShoppingCartItemCount } from '../../feature/shopping/store';

@Component({
  selector: 'aesc-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  shoppingCartItemCount$: Observable<number> = this.store$.select(
    selectShoppingCartItemCount
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store$: Store<AppState>,
  ) { }

  buttonClicked(event) {
  }

}
