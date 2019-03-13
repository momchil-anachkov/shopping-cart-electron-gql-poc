import { Params } from '@angular/router';
export interface RouterSliceState {
  url: string;
  params: Params;
  queryParams: Params;
}
