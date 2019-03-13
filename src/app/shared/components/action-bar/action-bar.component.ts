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
  @Input() align: 'left' | 'right';

  constructor(
  ) {
  }

  ngOnChanges() {
    this.align = this.align || 'right';
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
