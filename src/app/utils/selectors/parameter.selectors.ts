import { AppState } from '../../state/app.state';
import { StoreKeyNames } from '../../config';

export const selectIsNewItem = (itemId: string) => (state: AppState) => state[StoreKeyNames.ROUTER].state.params[itemId] === undefined;

export const selectIdValue = (itemId: string) => (state: AppState) => state[StoreKeyNames.ROUTER].state.params[itemId];
