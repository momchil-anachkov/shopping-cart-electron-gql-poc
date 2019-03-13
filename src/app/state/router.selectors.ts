import { AppState } from './app.state';
import { StoreKeyNames } from '../config';

export const selectRouter = (state: AppState) => state[StoreKeyNames.ROUTER];

export const selectRouterSliceState = (state: AppState) => state[StoreKeyNames.ROUTER].state;
