import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'aesc-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnChanges, OnInit, AfterContentInit {
  @ContentChildren(TemplateRef) contentChildren: QueryList<TemplateRef<any>>;
  @Input() horizontalAlign: 'left' | 'right';

  constructor(
  ) {
  }

  ngOnChanges() {
    this.horizontalAlign = this.horizontalAlign || 'right';
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
