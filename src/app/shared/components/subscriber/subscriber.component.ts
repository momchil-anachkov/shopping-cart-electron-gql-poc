import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, PartialObserver, Subscription } from 'rxjs';

@Component({
  selector: 'aesc-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
  ) {
  }

  protected subscribe<T>(
    to: Observable<T>,
    observer?: PartialObserver<T>
  ): Subscription;

  protected subscribe<T>(
    to: Observable<T>,
    next?: (value: T) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription;

  protected subscribe<T>(
    to: Observable<T>,
    next?: any,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    let subscription: Subscription;
    if (typeof next === 'function') {
      subscription = to.subscribe(next, error, complete);
    } else {
      subscription = to.subscribe(next);
    }
    this.subscriptions.push(subscription);
    return subscription;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
